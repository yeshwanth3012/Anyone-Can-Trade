import React, { useMemo, useState } from "react";
import useRazorpayPayment from "../hooks/useRazorpayPayment";
import { useParams } from "react-router-dom";
import { Currency } from "lucide-react";
import PaymentSuccessOverlay from "./PaymentSuccessOverlay";

const PersonalForm = () => {
  const { triggerPayment } = useRazorpayPayment();
  const { type } = useParams();
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [status, setStatus] = useState("")
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSuccess = (val)=>{
    setShowOverlay(true)
    setStatus(val)
  }
  const handleSubmit = () => {
    triggerPayment(form,type,onSuccess);
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
              with us, we will refund your money 100%.
            </p>
          </div>
        </div>
      )}
      <div className="rounded-lg p-5 flex flex-col gap-4 w-full max-w-[600px] mx-auto bg-[#E3C45D0D] shadow-sm">
        <div>
          <h2 className="text-xl font-normal text-center">Personal Details</h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <span className="w-6 hidden md:w-[5%] md:flex">1.</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
              <label className="sm:text-right sm:w-[30%]">Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <span className="w-6 hidden md:w-[5%] md:flex">2.</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
              <label className="sm:text-right sm:w-[30%]">Age:</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <span className="w-6 hidden md:w-[5%] md:flex">3.</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
              <label className="sm:text-right sm:w-[30%]">Email ID:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
            <span className="w-6 hidden md:w-[5%] md:flex">4.</span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
              <label className="sm:text-right sm:w-[30%]">Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
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
            backgroundColor: Object.values(form).includes("")
              ? "rgba(110, 147, 210, 0.25)" // lighter shade for disabled
              : "rgba(110, 147, 210, 0.47)",
          }}
          onClick={handleSubmit}
          disabled={Object.values(form).includes("")}
          className={`text-[#000000] px-24 py-3 rounded-full font-medium text-[1.2rem] transition 
            ${
              Object.values(form).includes("")
                ? "cursor-not-allowed opacity-50 shadow-none"
                : "cursor-pointer hover:shadow-lg hover:scale-[1.02]"
            }`}
        >
          Pay {finalAmount}/-
        </button>
      </div>
      {showOverlay && (
        <PaymentSuccessOverlay status={status} onClose={() => setShowOverlay(false)} />
      )}
    </div>
  );
};

export default PersonalForm;
