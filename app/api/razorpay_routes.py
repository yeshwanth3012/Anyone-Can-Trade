from fastapi import APIRouter, HTTPException, Depends, BackgroundTasks
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
import hmac
import hashlib
import razorpay

import os
from dotenv import load_dotenv
from app.db import get_db
from app.models import Payment
from app.api.email_service import send_payment_email_admin, send_payment_email_user

load_dotenv()
router = APIRouter(prefix="/api", tags=["Razorpay"])

# ✅ Razorpay client ONLY for order creation
razorpay_client = razorpay.Client(
    auth=(os.getenv("RAZORPAY_KEY_ID"), os.getenv("RAZORPAY_KEY_SECRET"))
)

# -------------------------------
# Request Models
# -------------------------------

class OrderRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    amount: int  # in paise
    currency: str = "INR"
    courseType: str


class VerifyRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    userEmail: EmailStr


# -------------------------------
# Create Order API
# -------------------------------

@router.post("/create-order")
def create_order(order: OrderRequest, db: Session = Depends(get_db)):
    try:
        razorpay_order = razorpay_client.order.create({
            "amount": order.amount,
            "currency": order.currency,
            "payment_capture": 1
        })

        payment = Payment(
            name=order.name,
            email=order.email,
            phone=order.phone,
            amount=order.amount / 100,  # paise → rupees
            currency=order.currency,
            order_id=razorpay_order["id"],
            status="PENDING",
            courseType=order.courseType
        )

        db.add(payment)
        db.commit()

        return {
            "order_id": razorpay_order["id"],
            "amount": razorpay_order["amount"],
            "currency": razorpay_order["currency"]
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# -------------------------------
# Verify Payment (HMAC)
# -------------------------------

@router.post("/verify-payment")
def verify_payment(payload: VerifyRequest, 
                   background_tasks: BackgroundTasks,
                   db: Session = Depends(get_db)):
    try:
        # 1️⃣ Generate expected signature
        print('1')
        message = f"{payload.razorpay_order_id}|{payload.razorpay_payment_id}"

        generated_signature = hmac.new(
            os.getenv("RAZORPAY_KEY_SECRET").encode(),
            message.encode(),
            hashlib.sha256
        ).hexdigest()

        # 2️⃣ Compare signatures
        print(2)
        if not hmac.compare_digest(
            generated_signature,
            payload.razorpay_signature
        ):
            raise HTTPException(status_code=400, detail="Invalid payment signature")

        # 3️⃣ Fetch payment record
        print(3)
        payment = db.query(Payment).filter(
            Payment.order_id == payload.razorpay_order_id
        ).first()

        if not payment:
            raise HTTPException(status_code=404, detail="Order not found")

        # 4️⃣ Update DB
        print(4)
        payment.payment_id = payload.razorpay_payment_id
        payment.signature = payload.razorpay_signature
        payment.status = "SUCCESS"

        db.commit()

        # 5️⃣ Send confirmation emails
        print(5)
        background_tasks.add_task(send_payment_email_user, payment)
        background_tasks.add_task(send_payment_email_admin, payment)

        return {"status": "payment successful"}

    except HTTPException:
        raise
    except Exception as e:
        print("Verification error:", e)
        raise HTTPException(status_code=400, detail="Payment verification failed")
