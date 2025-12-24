from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Keep names similar to your Spring properties
    database_url: str = "postgresql+psycopg2://tradingmastersindia_db_user:t5VDApI0MqUY2chBceEboR1i7HZQf7JL@dpg-d55op2chg0os73a8d5mg-a/tradingmastersindia_db"
    #database_url:str = "postgresql+psycopg2://postgres:postgres@localhost:5432/payments_db"
    razorpay_key_id: str = "rzp_test_RvN0HGkqSpOSFx"
    razorpay_key_secret: str = "AqNvwzTI6OwL7yGuLO6BVCWx"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    SMTP_HOST: str= "smtpout.secureserver.net"
    SMTP_PORT: str= "587"
    SMTP_USER:str ="contact@tradingmastersindia.com"
    SMTP_PASS:str="Askmeon@88"

    ADMIN_EMAIL:str = "contact@tradingmastersindia.com"

settings = Settings()

