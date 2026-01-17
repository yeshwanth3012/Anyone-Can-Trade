from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Any, Optional


class PaymentOut(BaseModel):
    id: int

    # User details
    name: str
    email: EmailStr
    phone: Optional[str] = None

    # Order details
    order_id: str
    courseType: str
    amount: float
    currency: str

    # Razorpay details
    payment_id: Optional[str] = None
    signature: Optional[str] = None

    status: str
    created_at: datetime

    # User Q&A
    user_qa: Optional[dict[str, Any]] = None

    class Config:
        from_attributes = True

class ContactUsRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    age: str