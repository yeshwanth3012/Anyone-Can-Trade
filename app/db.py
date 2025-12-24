from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from app.core.config import settings

# Example URL:
# mysql+pymysql://root:your_password@localhost:3306/razorpay_db
engine = create_engine(settings.database_url, pool_pre_ping=True)

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
