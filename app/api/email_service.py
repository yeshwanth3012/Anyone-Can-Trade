import smtplib
from email.mime.text import MIMEText
import os
from app.core.config import settings

SMTP_HOST = settings.SMTP_HOST
SMTP_PORT = int(settings.SMTP_PORT)
SMTP_USER = settings.SMTP_USER
SMTP_PASS = settings.SMTP_PASS
ADMIN_EMAIL = settings.ADMIN_EMAIL

def send_email(to, subject, body):
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = to

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)

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
    send_email(ADMIN_EMAIL, "New Payment Received", body)
