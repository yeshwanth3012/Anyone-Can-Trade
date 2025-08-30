// File: src/pages/Home.jsx
import IntroSection from "../components/IntroSection";
import Testimonials from "../components/Testimonials";
import JourneyButton from "../components/JourneyButton";
import VideoSection from "../components/VideoSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="rounded-md mt-[5rem]">
      <Helmet>
      <title>Trading Masters India – Indias Best Online Stock Market Education Institute</title>
      <meta name="description" content="India’s only Institute for hands-on Trading. You won’t just learn the theory, but also get practical expertise to become a successful trader in 3 months." />
      <meta name="keywords" content="trading for beginners, learn trading, start trading, trading mentorship, online trading classes, stock market basics" />
      <link rel="canonical" href="https://tradingmastersindia.com/" />

    {/* <!-- Open Graph --> */}
    <meta property="og:title" content="Trading Masters of India | Learn Smart Trading" />
    <meta property="og:description" content="Join Trading Masters of India to master the art of stock market trading with expert-led courses and mentorship." />
    <meta property="og:image" content="https://tradingmastersindia.com/TMI_Logo.png" />
    <meta property="og:url" content="https://tradingmastersindia.com/" />
    <meta property="og:type" content="website" />

    {/* <!-- Twitter Card --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Trading Masters of India | Learn Smart Trading" />
    <meta name="twitter:description" content="Join Trading Masters of India to master the art of stock market trading with expert-led courses and mentorship." />
    <meta name="twitter:image" content="https://tradingmastersindia.com/TMI_Logo.png" />

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
              }
            ]
          }
        `}
      </script>
    </Helmet>
      <IntroSection />
      <VideoSection />
      <JourneyButton />
      <Testimonials />
    </div>
  );
}
