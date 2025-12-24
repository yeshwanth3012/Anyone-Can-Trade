from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from app.db import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)

    # User details
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=True)

    # Order details
    order_id = Column(String, index=True, unique=True)
    courseType = Column(String, nullable=False)
    amount = Column(Float)
    currency = Column(String, default="INR")

    # Razorpay details
    payment_id = Column(String, nullable=True)
    signature = Column(String, nullable=True)

    status = Column(String, default="PENDING")  # PENDING / SUCCESS / FAILED
    created_at = Column(DateTime, default=datetime.utcnow)
