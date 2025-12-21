package com.tradingmastersindia.paymentservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Payment {
    @Id
    private String razorpayPaymentId;
    private String razorpayOrderId;
    private String userId;
    private int amount;
    private String status;
}