import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TradingFormYodha = ({form}) => {
  const location = useLocation();
  const { paymentId, courseType } = location.state || {}; 
  const [yodhaForm, setYodhaForm] = useState({
    profession: "",
    income: "",
    reason: "",
    style: "",
    capital: "",
    returnRate: "",
    experience: "",
    learningMethod: "",
    consistentProfit: "",
    mentorshipFee: ""
  });

  useEffect(()=>{
  if(form){
    setYodhaForm(form)
  }
  },[form])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setYodhaForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async () => {
  if (!paymentId || !courseType) {
    alert("Missing paymentId or courseType from navigation state.");
    return;
  }

  const payload = {
    paymentId: paymentId,
    courseType: courseType,
    formData: JSON.stringify(yodhaForm) // stringify form object
  };

  try {
    const response = await fetch("http://35.154.64.133:8080/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Sending JSON
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const data = await response.json();
    console.log("Success:", data);
    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form.");
  }
};


  return (
    <>
      <div className={`rounded-lg py-5 px-4 sm:px-8 md:px-[9rem] flex flex-col gap-6 mx-auto shadow-sm ${form ? "w-[100%] bg-[#F0F0F0]":"mt-[6.5rem] w-[95%] bg-[#E3C45D0D]"}`}>
        <h2 className="text-xl font-normal text-center">Trading Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:border-r md:border-gray-300 md:pl-8">
            {/* Q5 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">What’s your profession</p>
              {["Salaried", "Self employed", "Not Working"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="profession"
                    value={option}
                    checked={yodhaForm.profession === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q6 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">Your Monthly Income</p>
              {["Less than 50K", "Less than 1 lakh", "Above one lakh"].map(
                (option) => (
                  <label key={option} className="block ml-4 md:ml-6">
                    <input
                      type="radio"
                      name="income"
                      value={option}
                      checked={yodhaForm.income === option}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                )
              )}
            </div>

            {/* Q7 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                Why are you into stock market
              </p>
              {[
                "To Become a Full-time trader/Career in stock market",
                "Part time trader",
                "Investor"
              ].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="reason"
                    value={option}
                    checked={yodhaForm.reason === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q8 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">What’s your Trading Style</p>
              {["Intraday", "Swing", "Long term Investments"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="style"
                    value={option}
                    checked={yodhaForm.style === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q9 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">What’s your capital</p>
              {[
                "Less than 2 lakhs",
                "2 to 5 lakhs",
                "5 to 10 lakhs",
                "Above 10 lakhs"
              ].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="capital"
                    value={option}
                    checked={yodhaForm.capital === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:pl-8">
            {/* Q10 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                Monthly return on your capital.
              </p>
              {[
                "Making losses",
                "2-5%",
                "5-10%",
                "Above 10%"
              ].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="returnRate"
                    value={option}
                    checked={yodhaForm.returnRate === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q11 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">Trading Experience</p>
              {["0-1 year", "1-3 years", "Above 3 years"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={yodhaForm.experience === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q12 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">How did you learn Trading</p>
              {[
                "Free YouTube Videos",
                "Paid online courses",
                "Paid Offline courses"
              ].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="learningMethod"
                    value={option}
                    checked={yodhaForm.learningMethod === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q13 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                Are you getting Consistent profits monthly
              </p>
              {["Yes", "No"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="consistentProfit"
                    value={option}
                    checked={yodhaForm.consistentProfit === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q14 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                If we solve your problem and make you profitable in 1 month,
                Will you be able to pay a fee of 20k for this 1:1 mentorship
              </p>
              {["Yes", "No"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="mentorshipFee"
                    value={option}
                    checked={yodhaForm.mentorshipFee === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-2 mb-2 flex justify-center">
        <button
          style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
          onClick={handleSubmit}
          className={`text-[#000000] px-24 py-3 rounded-full font-medium transition text-[1.2rem] ${form ? "hidden":""}`}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default TradingFormYodha;
