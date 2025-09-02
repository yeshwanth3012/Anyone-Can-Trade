import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppRoutes from "./router";

export default function App() {
  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Trading Masters India",
            url: "https://tradingmastersindia.com",
            logo: "https://tradingmastersindia.com/TMI_logo.png",
            sameAs: [
              "https://www.facebook.com/tradingmastersindia",
              "https://www.instagram.com/tradingmastersindia",
              "https://www.linkedin.com/company/tradingmastersindia"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9949471851",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: "en"
            }
          })}
        </script>
      </Helmet>

      <AppRoutes />
    </Router>
  );
}
