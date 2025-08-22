import React from "react";
import tick from "./../assets/images/testimonial/tick.svg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const pricingData = [
  {
    title: "ACT 1.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
  {
    title: "ACT 2.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
  {
    title: "ACT 3.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
];

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          Courses | Trading Masters India – Indias Best Online Stock Market
          Education Institute
        </title>
        <meta
          name="description"
          content="Explore advanced trading strategies with our self-paced video courses. Ideal for those with basic knowledge who want to level up their skills."
        />
        <meta
          name="keywords"
          content="advanced trading courses, trading videos, technical analysis course, stock trading education, self-paced trading"
        />
      </Helmet>
      <div className="mt-[6rem] flex flex-col gap-3 items-center px-4">
        <h2 className="text-4xl font-[500] text-center">Courses</h2>
        <section className="text-center px-6 py-4 max-w-6xl mx-auto">
          <p className="text-2xl font-medium mb-6">
            All Our Courses are curated for 3 months
          </p>

          <p className="text-[1.5rem] text-start mb-3 ">
            <span className="font-semibold">First Month – </span>
            Theoretical Part.
          </p>

          <p className="text-[1.5rem] text-start mb-3">
            <span className="font-semibold">Second Month – </span>
            Practical application in the live market.
            <br />
            Risk Management and Trading Psychology.
          </p>

          <p className="text-[1.5rem] text-start">
            <span className="font-semibold">Third Month – </span>
            For refining your Strategies in the market and submission of your
            track sheet to us.
          </p>
        </section>
        <p className="text-[1.4rem] font-[600] text-gray-600 text-center">
          Note: We teach 2 batches, Weekday and Weekend batches for our
          student's convenience. <br />
          Courses are offered in English, Hindi & Telugu.
        </p>
        {/* Video Placeholder */}
        <h2 className="text-2xl font-[500] text-center mt-6">
          Please watch this video for clear understanding of our course
        </h2>
        <div className="w-[320px] sm:w-[900px] h-[400px] bg-gray-300 rounded-md flex items-center justify-center text-white font-semibold">
          <video
            className="w-full h-full object-cover rounded-md"
            controls
            preload="metadata"
          >
            <source src="/videos/stock-market.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Pricing Cards */}
        <div className="w-full max-w-5xl overflow-x-auto mt-4">
          <table className="min-w-[720px] table-fixed border border-gray-300 rounded-md text-left text-[1rem] text-gray-700">
            <thead className="bg-gray-100 text-black text-[1.3rem]">
              <tr>
                <th
                  className="p-4 border-r border-gray-300 font-semibold"
                  style={{ width: "25%" }}
                >
                  Features
                </th>
                <th
                  className="p-4 border-r border-gray-300 font-semibold"
                  style={{ width: "37.5%" }}
                >
                  ACT Achiever
                </th>
                <th className="p-4 font-semibold" style={{ width: "37.5%" }}>
                  ACT Pro
                </th>
              </tr>
            </thead>
            <tbody className="text-[1.2rem]">
              <tr className="border-t border-gray-300">
                <td className="p-4 border-r border-gray-300 font-medium">
                  Course Details
                </td>
                <td className="p-4 border-r border-gray-300">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1 month of theory</li>
                    <li>
                      2<sup>nd</sup> Month: Roadmap for the Practical
                      application in live market will be given i.e, Paper
                      Trading- Equity -Option Hedging – Naked options Trading.
                    </li>
                    <li>
                      3<sup>rd</sup> Month: Mastering Risk Management & Trading
                      Psychology.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Students have to follow the roadmap and submit the track
                    sheet.
                  </p>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1 month of theory</li>
                    <li>
                      2<sup>nd</sup> Month: Roadmap for the Practical
                      application in live market will be given i.e, Paper
                      Trading- Equity -Option Hedging – Naked options Trading.
                    </li>
                    <li>
                      3<sup>rd</sup> Month: Mastering Risk Management & Trading
                      Psychology.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Students have to follow the roadmap and submit the track
                    sheet.
                  </p>
                </td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="p-4 border-r border-gray-300 font-medium">
                  Live Q/A
                </td>
                <td className="p-4 border-r border-gray-300">Available</td>
                <td className="p-4">Available</td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="p-4 border-r border-gray-300 font-medium">
                  Live Assistance
                </td>
                <td className="p-4 border-r border-gray-300">Not Available</td>
                <td className="p-4">Available</td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="p-4 border-r border-gray-300 font-medium">
                  Price
                </td>
                <td className="p-4 border-r border-gray-300 font-semibold">
                  ₹20,000/-
                </td>
                <td className="p-4 font-semibold">₹36,000/-</td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="p-4 border-r border-gray-300 font-medium">
                  Enroll
                </td>
                <td className="p-4 border-r border-gray-300">
                  <button
                    onClick={() => navigate("/form/achiever")}
                    className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    Join Now
                  </button>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => navigate("/form/pro")}
                    className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    Join Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-2xl m-0 font-semibold italic text-center text-gray-800">
          “Don’t Procrastinate, it will delay your dreams”
        </p>
        <p className="text-2xl text-gray-600 font-semibold text-center mb-4">
          Note: If we are unable to make you a successful Trader, we will refund
          your money*.
        </p>
        {/* <div
          onClick={() =>
            window.open(
              "https://wa.me/9392692459?text=Hello%20Admin%2C%20I%20am%20interested%20in%20your%20courses.",
              "_blank"
            )
          }
          className="fixed bottom-4 right-10 cursor-pointer flex flex-col items-center gap-1 z-50"
        >
          <img src={whatsApp} className="w-10 h-10" alt="WhatsApp" />
          <p className="text-[0.8rem] text-black">WhatsApp</p>
        </div> */}
      </div>
    </>
  );
};

export default Courses;
