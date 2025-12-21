package com.tradingmastersindia.paymentservice.repository;

import com.tradingmastersindia.paymentservice.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, String> {
    Payment findByRazorpayOrderId(String orderId);
}