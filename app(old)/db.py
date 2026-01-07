from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, DeclarativeBase
import os
from dotenv import load_dotenv

load_dotenv()
# Example URL:
# mysql+pymysql://root:your_password@localhost:3306/razorpay_db
engine = create_engine(os.getenv("DATABASE_URL"), pool_pre_ping=True,  connect_args={"sslmode": "require"})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class Base(DeclarativeBase):
    pass

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        print("✅ Database connected successfully!")
except Exception as e:
    print("❌ Database connection failed")
    print(e)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
