import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import certifi

# os.environ["SSL_CERT_FILE"] = certifi.where()
load_dotenv()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")


def load_html_template(filename: str) -> str:
    path = os.path.join(TEMPLATE_DIR, filename)
    with open(path, "r", encoding="utf-8") as file:
        return file.read()
    
def send_email(to, subject, html_body, text_body=None):
    message = Mail(
        from_email=os.getenv("SMTP_USER"),
        to_emails=to,
        subject=subject,
        plain_text_content=text_body or "Please view this email in HTML format.",
        html_content=html_body
    )

    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
        response = sg.send(message)
        print("Email sent:", response.status_code)
    except Exception as exc:
        print("Email error:", exc)





def send_payment_email_user(payment):
    html = load_html_template("user.html")

    html = (
        html.replace("{{name}}", payment.name or "Customer")
            .replace("{{payment_id}}", payment.payment_id or "-")
    )

    text_body = f"""
    Hi {payment.name},

    We have successfully received your payment.
    Transaction Number: {payment.payment_id}

    Our team will try to connect with you shortly.

    Contact: contact@tradingmastersindia.com
    """

    send_email(
        payment.email,
        "Payment Received Successfully",
        html,
        text_body
    )



def send_payment_email_admin(payment):
    html = load_html_template("admin.html")

    html = (
        html.replace("{{name}}", payment.name or "-")
            .replace("{{email}}", payment.email or "-")
            .replace("{{phone}}", payment.phone or "-")
            .replace("{{amount}}", str(payment.amount))
            .replace("{{payment_id}}", payment.payment_id or "-")
    )

    send_email(
        os.getenv("ADMIN_EMAIL"),
        "New Payment Received",
        html
    )

def send_contact_email_admin(data):
    html = load_html_template("contact_us_mail_to_admin.html")

    html = (
        html.replace("{{name}}", data.name)
            .replace("{{email}}", data.email)
            .replace("{{phone}}", data.phone)
            .replace("{{age}}", data.age)
    )

    send_email(
        os.getenv("ADMIN_EMAIL"),
        "New Contact Us Interest",
        html
    )
