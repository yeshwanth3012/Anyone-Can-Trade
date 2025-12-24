from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.payments import router as payments_router
from app.api.health import router as health_router
from app.api.razorpay_routes import router as razorpay_router
from app.db import Base, engine
from app.models import Payment

# Create DB tables (dev-friendly). In production, prefer Alembic migrations.
Base.metadata.create_all(bind=engine)

app = FastAPI(title="TradingMastersIndia Payment Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],                      # includes OPTIONS
    allow_headers=["*"],
)

app.include_router(payments_router, prefix="/api/payments", tags=["payments"])
app.include_router(health_router)
app.include_router(razorpay_router)