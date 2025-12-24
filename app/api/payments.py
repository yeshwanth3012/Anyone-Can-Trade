from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app import schemas
from app.crud import get_all_payments

router = APIRouter()

@router.get("", response_model=list[schemas.Payment])
def list_payments(db: Session = Depends(get_db)):
    # Equivalent to Spring: GET /api/payments
    return get_all_payments(db)
