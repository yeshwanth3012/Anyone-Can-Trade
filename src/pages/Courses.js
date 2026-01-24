import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          Courses | Trading Masters India – India’s Best Online Stock Market
          Education Institute
        </title>
        <meta
          name="description"
          content="Explore expert-designed trading courses with NeuroFinance Blueprint. Learn trading strategies, risk management, and psychology to trade confidently."
        />
        <meta
          name="keywords"
          content="trading courses, stock market courses, NeuroFinance Blueprint, trading psychology, trading education India"
        />
        <link rel="canonical" href="https://tradingmastersindia.com/courses" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trading Courses | Trading Masters India"
        />
        <meta
          property="og:description"
          content="Expert-designed trading courses with NeuroFinance Blueprint to master markets and mindset."
        />
        <meta
          property="og:image"
          content="https://tradingmastersindia.com/TMI_Logo.png"
        />
        <meta
          property="og:url"
          content="https://tradingmastersindia.com/courses"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trading Courses | Trading Masters India"
        />
        <meta
          name="twitter:description"
          content="Master trading strategies, psychology, and discipline with our expert-led courses."
        />
        <meta
          name="twitter:image"
          content="https://tradingmastersindia.com/TMI_Logo.png"
        />

        {/* Breadcrumb */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://tradingmastersindia.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Courses",
                "item": "https://tradingmastersindia.com/courses"
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="mt-[6rem] flex flex-col gap-4 items-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[500] text-center">
          Courses
        </h2>

        {/* 3 Month Breakdown */}
        <section className="text-center px-6 py-4 max-w-6xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6">
            All Our Courses are curated for 3 months
          </p>

          <p className="text-base sm:text-lg md:text-xl text-start mb-4">
            <span className="font-semibold">First Month – </span>
            Theoretical Part. You’ll dive into the foundations of trading and be
            introduced to the basics of the{" "}
            <span className="font-semibold">NeuroFinance Blueprint</span>, helping
            you build a strong mental framework from day one.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-start mb-4">
            <span className="font-semibold">Second Month – </span>
            Practical application in the live market. You’ll execute trades
            using a structured roadmap while emphasizing risk management and
            trading psychology as part of the{" "}
            <span className="font-semibold">NeuroFinance Blueprint</span>.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-start">
            <span className="font-semibold">Third Month – </span>
            Refining your strategies and submitting your track sheet. This phase
            helps you fine-tune your approach and strengthen both technical
            skills and mental resilience to trade confidently on your own.
          </p>
        </section>

        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 text-center">
          Note: We teach Weekday and Weekend batches for students’ convenience.
          <br />
          Courses are offered in English, Hindi & Telugu.
        </p>

        {/* Video */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-[500] text-center mt-6">
          Please watch this video for a clear understanding of our course
        </h2>

        <div className="w-[95%] sm:w-[80%] md:w-[65%] bg-black rounded-md overflow-hidden mt-4 aspect-video">
          <video
            className="w-full h-full"
            controls
            preload="metadata"
            playsInline
            controlsList="nodownload"
            poster="https://res.cloudinary.com/dxaqwyerl/video/upload/f_jpg,q_auto/v1769156670/courses_m_1_1_rfbtjm"
          >
            <source
              src="https://res.cloudinary.com/dxaqwyerl/video/upload/f_auto,q_auto/v1769156670/courses_m_1_1_rfbtjm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* <div className="w-[320px] sm:w-[900px] h-[200px] sm:h-[400px] rounded-md overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src="/videos/stock-market.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        {/* Pricing Table */}
        <div className="w-full max-w-5xl overflow-x-auto mt-6">
          <table className="min-w-[720px] table-fixed border border-gray-300 rounded-md text-left text-sm sm:text-base md:text-lg text-gray-700">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="p-4 border-r border-gray-300 w-[25%]">Features</th>
                <th className="p-4 border-r border-gray-300 w-[37.5%]">
                  ACT Achiever
                </th>
                <th className="p-4 w-[37.5%]">ACT Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 border-r font-medium">Course Details</td>
                <td className="p-4 border-r">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1 month of theory & introduction to NeuroFinance Blueprint</li>
                    <li>
                      2nd Month: Practical roadmap – Paper Trading, Equity,
                      Option Hedging & Naked Options Trading
                    </li>
                    <li>
                      3rd Month: Mastering Risk Management & Trading Psychology
                    </li>
                  </ul>
                  <p className="mt-2">
                    Students must follow the roadmap and submit the track sheet.
                  </p>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>1 month of theory & introduction to NeuroFinance Blueprint</li>
                    <li>
                      2nd Month: Practical roadmap – Paper Trading, Equity,
                      Option Hedging & Naked Options Trading
                    </li>
                    <li>
                      3rd Month: Mastering Risk Management & Trading Psychology
                    </li>
                  </ul>
                  <p className="mt-2">
                    Students must follow the roadmap and submit the track sheet.
                  </p>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 border-r font-medium">Live Q/A</td>
                <td className="p-4 border-r">Available</td>
                <td className="p-4">Available</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 border-r font-medium">
                  Live Assistance for Trades
                </td>
                <td className="p-4 border-r">Not Available</td>
                <td className="p-4">Available</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 border-r font-medium">Price</td>
                <td className="p-4 border-r font-semibold">₹20,000/-</td>
                <td className="p-4 font-semibold">₹36,000/-</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 border-r font-medium">Enroll</td>
                <td className="p-4 border-r">
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

        <p className="text-lg sm:text-xl md:text-2xl font-semibold italic text-center text-gray-800 mt-6">
          “Don’t Procrastinate, it will delay your dreams”
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-semibold text-center mb-6">
          Note: If we are unable to make you a successful trader, we will refund
          your money*.
        </p>
      </div>
    </>
  );
};

export default Courses;
