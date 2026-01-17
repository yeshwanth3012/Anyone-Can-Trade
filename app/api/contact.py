from fastapi import APIRouter
from app.schemas import ContactUsRequest
from app.api.email_service import send_contact_email_admin

router = APIRouter(prefix="/api", tags=["ContactUs"])

@router.post("/contact-us")
def contact_us(payload: ContactUsRequest):
    send_contact_email_admin(payload)

    return {
        "message": "Thank you for contacting us. Our team will reach out shortly."
    }
