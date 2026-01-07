from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from app.db import get_db
from app import schemas
from app.crud import get_all_payments

router = APIRouter(prefix="/health", tags=["Health"])

@router.get("/db")
def list_payments(db: Session = Depends(get_db)):
    # Equivalent to Spring: GET /api/payments
    db.execute(text("SELECT 1"))
    return {"status": "db connected"}
