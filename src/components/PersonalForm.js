import React, { useMemo, useState } from "react";
import useRazorpayPayment from "../hooks/useRazorpayPayment";
import { useParams } from "react-router-dom";
import PaymentSuccessOverlay from "./PaymentSuccessOverlay";

const PersonalForm = () => {
  const { triggerPayment, isVerifying } = useRazorpayPayment();
  const { type } = useParams();
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  const [showOverlay, setShowOverlay] = useState(false);
  const [status, setStatus] = useState("");

  const finalAmount = useMemo(() => {
    if (type === "yodha" || type === "mastery") {
      return 999;
    } else if (type === "achiever") {
      return 20000;
    } else if (type === "pro") {
      return 36000;
    }
  }, [type]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    currency: "INR",
    amount: finalAmount,
    courseType: type.toUpperCase(),
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.age) {
      newErrors.age = "Age is required.";
    } else if (form.age <= 0) {
      newErrors.age = "Age must be a positive number.";
    }

    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));

  //   // Remove error message as user types
  //   setErrors((prev) => ({
  //     ...prev,
  //     [name]: "",
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative age
    if (name === "age") {
      if (value === "" || parseInt(value) < 1) {
        setForm((prev) => ({ ...prev, [name]: "" }));
        return;
      }
    }

    if (name === "phoneNumber") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const onSuccess = (val) => {
    setShowOverlay(true);
    setStatus(val);
  };

  const handleSubmit = () => {
    if (validate()) {
      triggerPayment(form, type, onSuccess);
    }
  };

  return (
    <div className="mt-[6rem]">
      {(type === "yodha" || type === "mastery") && (
        <div className="flex justify-center items-center">
          <div className="w-[90%] sm:w-[70%] mt-4 mb-4 text-left text-gray-800 text-[1.1rem] leading-relaxed">
            <h3 className="text-3xl font-bold text-center">
              ACT {capitalizedType}
            </h3>
            <p className="font-normal text-gray-900 text-[1.3rem]">
              ACT 1:1 mentorship is for serious and dedicated traders only.
              Membership in this Program is by application only to ensure a high
              level of commitment and quality. Slots are strictly limited to
              maintain the integrity of the one-on-one mentorship.
            </p>
            <p className="font-normal text-gray-900 mt-4 text-[1.3rem]">
              To rule out the Junk. it’s a paid call. If you're not satisfied
              with us, we will refund your money.
            </p>
          </div>
        </div>
      )}

      <div className="rounded-lg p-5 flex flex-col gap-4 w-full max-w-[600px] mx-auto bg-[#E3C45D0D] shadow-sm">
        <div>
          <h2 className="text-xl font-normal text-center">Personal Details</h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {/* Name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <label className="sm:w-[30%]">Name:</label>
            <div className="sm:w-[69%] w-full">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full sm:w-[100%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Age */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <label className="sm:w-[30%]">Age:</label>
            <div className="sm:w-[69%] w-full">
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                min={1}
                className="w-full sm:w-[100%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <label className="sm:w-[30%]">Email ID:</label>
            <div className="sm:w-[69%] w-full">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full sm:w-[100%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <label className="sm:w-[30%]">Phone Number:</label>
            <div className="sm:w-[69%] w-full">
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                maxLength={10}
                className="w-full sm:w-[100%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center mt-3 mb-2 text-[1.1rem]">
        {(type === "yodha" || type === "mastery") && (
          <p className="font-medium">Start Trading with a Personal Mentor.</p>
        )}
        <button
          style={{
            backgroundColor: "rgba(110, 147, 210, 0.47)",
          }}
          onClick={handleSubmit}
          className={`text-[#000000] px-24 py-3 rounded-full font-medium text-[1.2rem] transition hover:shadow-lg hover:scale-[1.02]`}
        >
          Pay {finalAmount}/-
        </button>
        {isVerifying && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              <p className="text-white mt-4 text-lg">Verifying Payment...</p>
            </div>
          </div>
        )}
      </div>

      {showOverlay && (
        <PaymentSuccessOverlay
          status={status}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </div>
  );
};

export default PersonalForm;
