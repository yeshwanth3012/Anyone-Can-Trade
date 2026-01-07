from sqlalchemy.orm import Session
from app import models

def get_all_payments(db: Session):
    return db.query(models.Payment).all()

def get_payment_by_order_id(db: Session, order_id: str):
    return db.query(models.Payment).filter(models.Payment.razorpay_order_id == order_id).first()
