import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Mentorship = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>One-on-One Trading Mentorship | Any One Can Trade</title>
        <meta
          name="description"
          content="Get personalized one-on-one trading mentorship with experienced traders. Learn at your pace and gain confidence in the stock market."
        />
        <meta
          name="keywords"
          content="personal trading mentorship, stock market mentor, trading coach, learn trading one-on-one, beginner trading help"
        />
      </Helmet>

      {/* Header */}
      <div className="text-center px-8 mt-[6rem]">
        <h2 className="text-2xl sm:text-4xl font-[600] text-center">
          1:1 Mentorship
        </h2>
        <p className="text-lg sm:text-2xl text-black text-center font-medium mt-2">
          Only For Determined Traders.
        </p>
      </div>

      {/* Intro Paragraph */}
      <div className="mt-2 flex flex-col items-center">
        <div className="w-[90%] sm:w-[70%] mb-4 text-left text-gray-800 text-[1rem] sm:text-[1.3rem] leading-relaxed">
          <p>
            Unlock your trading potential with{" "}
            <span className="font-semibold">
              Trading Masters' India 1-to-1 Membership Program
            </span>
            . Experience personalized coaching, tailored strategies, and
            hands-on practice to transform you into a confident trader. Achieve
            consistent returns with direct mentorship from industry experts.
            <br />
            <span className="font-bold text-center text-[1.2rem] sm:text-[1.4rem] block m-0">
              Your success story starts here.
            </span>
            <span className="font-medium">We offer 2 Programmes:</span>
            <br />
            • ACT Mastery
            <br />• ACT Yodha
          </p>
        </div>

        {/* Video */}
        <p className="max-w-3xl mx-auto text-gray-700 mt-2 text-center px-4 font-medium text-[1rem] sm:text-[1.3rem]">
          Please watch this video for clear understanding of our Programmes
        </p>
        <div className="w-[90%] sm:w-[70%] bg-black rounded-md overflow-hidden">
          <video
            className="w-full h-[200px] sm:h-[300px] object-cover"
            controls
            preload="metadata"
          >
            <source src="/videos/stock-market.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ACT Mastery Section */}
      <div className="flex justify-center items-center w-[100%]">
        <div className="w-[90%] sm:w-[70%] mt-8 mb-4 text-left text-gray-800 text-[1rem] sm:text-[1.1rem] leading-relaxed">
          <h3 className="text-2xl sm:text-4xl font-bold">ACT Mastery</h3>
          <p className="mt-3 text-gray-800 leading-relaxed text-[1.1rem] sm:text-[1.3rem]">
            Dive into the stock market with our exclusive 1-to-1{" "}
            <span className="text-black font-medium">personalized</span>{" "}
            program, tailored for <em>beginners</em> aiming to carve out a
            successful career in the stock market.
          </p>
          <p className="mt-2 font-medium text-gray-900 text-[1.1rem] sm:text-[1.3rem]">
            This Program is Exclusively for Determined Beginners and Serious
            Investors.
          </p>

          <h4 className="mt-6 text-xl sm:text-2xl font-semibold">
            Key Features:
          </h4>
          <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-6 text-[1.1rem] sm:text-[1.3rem]">
            <li>
              {" "}
              As a TMI 1:1 member, you receive our highest level of support.{" "}
            </li>{" "}
            <li>Personalized goal setting.</li>{" "}
            <li>
              {" "}
              Step-by-step learning modules on market basics to Advanced
              concepts (Smart money concepts).{" "}
            </li>{" "}
            <li>Live Q/A Sessions.</li> <li>Live Support for trades.</li>{" "}
            <li>Risk Management & Position Sizing Techniques.</li>{" "}
            <li>Mastering Trading psychology.</li>{" "}
            <li>Weekend/ Weekday batches for your convenience.</li>{" "}
            <li>
              {" "}
              Building confidence and skills for a successful trading journey.{" "}
            </li>{" "}
            <li>Making you a successful trader in 3 months.</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-3 flex flex-col gap-2 items-center">
        <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-gray-700 mt-6 text-center px-4">
          To Know more talk to our team
        </p>
        <button
          style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
          className="text-black px-12 sm:px-24 py-2 sm:py-3 rounded-full font-medium transition text-lg sm:text-2xl"
          onClick={() => navigate("/form/mastery")}
        >
          Book 1:1 Call
        </button>
      </div>

      {/* ACT Yodha Section */}
      <div className="flex justify-center items-center w-[100%]">
        <div className="w-[90%] sm:w-[70%] mt-8 mb-4 text-left text-gray-800 text-[1rem] sm:text-[1.1rem] leading-relaxed">
          <h3 className="text-2xl sm:text-4xl font-bold">ACT Yodha</h3>
          <p className="mt-3 text-gray-800 leading-relaxed text-[1.1rem] sm:text-[1.3rem]">
            This program is curated for frustrated traders who are active in the
            battle of stock market for years but haven't found success and
            consistency.
          </p>
          <h4 className="mt-6 text-xl sm:text-2xl font-semibold">
            Key Features:
          </h4>
          <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-6 text-[1.1rem] sm:text-[1.3rem]">
            <li>
              {" "}
              As a TMI 1:1 member, you receive our highest level of support.{" "}
            </li>{" "}
            <li>
              Defining your Trading Style (Intraday/Swing/Positional).
            </li>{" "}
            <li>
              {" "}
              Assessing your capital and strategies you have been following.{" "}
            </li>{" "}
            <li>
              We help you build a personalized trading plan from scratch.
            </li>{" "}
            <li>Mastering Risk Management & Position Sizing.</li>{" "}
            <li>High-Probability Entry & Exit Strategies.</li>{" "}
            <li>
              Most importantly, Dedicated Daily Live video sessions with us to
              analyze your trades, discuss market psychology, and refine your
              strategy.
            </li>{" "}
            <li>
              Become a Successful, confident trader with consistent returns in 1
              month.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA for Yodha */}
      <div className="text-center py-3 flex flex-col gap-2 items-center">
        <p className="max-w-2xl mx-auto text-gray-700 mt-6 text-center px-4 text-xl sm:text-2xl">
          To Know more talk to our team
        </p>
        <button
          style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
          className="text-black px-12 sm:px-24 py-2 sm:py-3 rounded-full font-medium transition text-lg sm:text-2xl"
          onClick={() => navigate("/form/yodha")}
        >
          Book 1:1 Call
        </button>
      </div>
    </>
  );
};

export default Mentorship;
