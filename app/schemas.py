from pydantic import BaseModel

class PaymentBase(BaseModel):
    razorpay_order_id: str
    user_id: str
    amount: int
    status: str

class Payment(PaymentBase):
    razorpay_payment_id: str

    class Config:
        from_attributes = True
