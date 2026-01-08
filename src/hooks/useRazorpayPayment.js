// src/hooks/useRazorpayPayment.js
import { useState } from "react";
import { useRazorpay } from "react-razorpay";
import { useNavigate } from "react-router-dom";

const useRazorpayPayment = () => {
  const { Razorpay } = useRazorpay();
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(false);

  const triggerPayment = async (form, type, onSuccess) => {
    console.log(form )
    try {
      // Step 1: Create work order + Razorpay order
      const res = await fetch("https://api.tradingmastersindia.com/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      localStorage.setItem("paymentId", JSON.stringify(data.paymentId));

      if (!data) {
        alert("Failed to get payment details");
        return;
      }

      // Step 2: Configure Razorpay popup
      const options = {
        amount: data.amount,
        currency: data.currency,
        order_id: data.order_id,
        name: "Trading Masters India", 
        key: "rzp_live_S1GTfGWcmpPyhg",
        prefill: {
          email: form.email,
          contact: form.phoneNumber,
          name: form.name,
        },
        handler: async function (response) {
          console.log(response);
          setIsVerifying(true)
          // Step 3: Verify payment with backend
          const verifyRes = await fetch(
            "https://api.tradingmastersindia.com/api/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userEmail:form.email
              }),
            }
          );

          const finalRes = await verifyRes.json();
          console.log(finalRes)

          if (finalRes.status !== "failure") {
            if (type === "mastery") {
              navigate("/trading-form/mastery", {
                state: { paymentId: finalRes.paymentId, courseType: type },
              });
            } else if( type === "yodha") {
              navigate("/trading-form/yodha", {
                state: { paymentId: finalRes.paymentId, courseType: type },
              });
            }else{
              onSuccess("success")
              // alert("Payment Successfull")
            }
          } else {
            // alert("Payment verification failed");
            onSuccess("failure")
          }
        },
        method: {
            emi: type === "mastery" || type === "yodha" ? true : false
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    } finally{
      setIsVerifying(false)
    }
  };

  return { triggerPayment, isVerifying };
};

export default useRazorpayPayment;
