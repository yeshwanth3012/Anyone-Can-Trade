// src/components/PaymentStatusOverlay.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessOverlay = ({ status, onClose }) => {
  const isSuccess = status === "success";
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        {isSuccess ? (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-800 text-lg mb-2">
              You have successfully enrolled and your journey towards success begins now.
            </p>
            <p className="text-gray-700 text-md font-semibold mb-6">
              Our team will contact you in <span className="font-bold">24hrs</span>.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Payment Failed
            </h2>
            <p className="text-gray-800 text-lg mb-2">
              Oops! Something went wrong with your payment.
            </p>
            <p className="text-gray-700 text-md font-semibold mb-6">
              Please try again or contact support for assistance.
            </p>
          </>
        )}

        <button
          onClick={()=>{
            isSuccess ? navigate("/") : onClose()
          }}
          className={`${
            isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
          } text-white px-6 py-2 rounded-md text-lg font-semibold`}
        >
          {isSuccess ? "Continue" : "Retry"}
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessOverlay;
