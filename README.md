# TradingMastersIndia Payment Service (FastAPI)

This is a FastAPI conversion of your Spring Boot payment service.

## What’s implemented (from the Java zip)
- `Payment` model mapped to MySQL
- `GET /api/payments` returns all payments

## Run locally

1) Create a virtualenv and install deps:
```bash
pip install -r requirements.txt
```

2) Configure environment (edit `.env`):
```bash
DATABASE_URL=mysql+pymysql://root:your_password@localhost:3306/razorpay_db
RAZORPAY_KEY_ID=YOUR_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_SECRET_KEY
```

3) Start the server:
```bash
uvicorn app.main:app --reload --port 8080
```

Open:
- http://127.0.0.1:8080/docs

## Notes
- For simplicity, tables are created automatically at startup via `Base.metadata.create_all`.
  In production, use Alembic migrations.
