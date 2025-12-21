package com.tradingmastersindia.paymentservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.tradingmastersindia.paymentservice.model.Payment;
import com.tradingmastersindia.paymentservice.service.RazorpayService;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private RazorpayService razorpayService;

    @GetMapping
    public List<Payment> getAllPayments() {
        return razorpayService.getAllPayments();
    }
}