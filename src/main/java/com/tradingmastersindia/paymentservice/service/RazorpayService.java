package com.tradingmastersindia.paymentservice.service;

import com.tradingmastersindia.paymentservice.model.Payment;
import com.tradingmastersindia.paymentservice.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RazorpayService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }
}