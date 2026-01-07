import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

def send_email(to, subject, body):
    message = Mail(
        from_email=os.getenv("SMTP_USER"),
        to_emails=to,
        subject=subject,
        plain_text_content=body
    )

    try:
        sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
        response = sg.send(message)
        print(response.status_code)
    except Exception as exc:
        print(exc)

def send_payment_email_user(payment):
    body = f"""
    Hi {payment.name},

    Your payment was successful.

    Order ID: {payment.order_id}
    Amount: ₹{payment.amount}

    Thank you!
    """
    send_email(payment.email, "Payment Successful", body)


def send_payment_email_admin(payment):
    body = f"""
    Payment received:

    Name: {payment.name}
    Email: {payment.email}
    Amount: ₹{payment.amount}
    Order ID: {payment.order_id}
    """
    send_email(os.getenv("ADMIN_EMAIL"), "New Payment Received", body)