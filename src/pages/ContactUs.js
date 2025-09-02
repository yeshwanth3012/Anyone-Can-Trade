import React, { useState } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMessage("");
    try {
      const response = await fetch("https://api.tradingmastersindia.com/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || "Form submitted successfully!");
        setForm({ name: "", age: "", email: "", phoneNumber: "" }); // clear form
      } else {
        setResponseMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | Trading Masters India – Indias Best Online Stock Market
          Education Institute
        </title>
        <meta
          name="description"
          content="Have questions? Reach out to us for more information about trading mentorship, course details, or anything else."
        />
        <meta
          name="keywords"
          content="contact trading mentor, get in touch trading, trading course support, ask trading questions"
        />
        <link
          rel="canonical"
          href="https://tradingmastersindia.com/contact"
        />
        <meta
          property="og:title"
          content="Contact Us | Trading Masters India"
        />
        <meta
          property="og:description"
          content="Get in touch with Trading Masters India for support, queries, or more information about our courses and mentorship programs."
        />
        <meta
          property="og:image"
          content="https://tradingmastersindia.com/TMI_Logo.png"
        />
        <meta
          property="og:url"
          content="https://tradingmastersindia.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Trading Masters India"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Trading Masters India for support, queries, or more information about our courses and mentorship programs."
        />
        <meta
          name="twitter:image"
          content="https://tradingmastersindia.com/TMI_Logo.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tradingmastersindia.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://tradingmastersindia.com/contact",
              },
            ],
          })}
        </script>
      </Helmet>

      <div>
        <div className="rounded-lg px-5 flex flex-col gap-4 w-full max-w-[600px] mx-auto bg-[#E3C45D0D] shadow-sm mt-[7rem]">
          <div>
            <h2 className="text-xl font-normal text-center">Personal Details</h2>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 w-full">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Age", name: "age", type: "number" },
              { label: "Email ID", name: "email", type: "email" },
              { label: "Phone Number", name: "phoneNumber", type: "tel" },
            ].map((field, index) => (
              <div
                key={field.name}
                className="flex flex-col sm:flex-row items-start sm:items-center w-full"
              >
                <span className="w-6 hidden md:w-[5%] md:flex">
                  {index + 1}.
                </span>
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
                  <label className="sm:text-right sm:w-[30%]">
                    {field.label}:
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center py-4">
          <button
            style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
            className="text-[#000000] px-16 md:px-24 py-3 rounded-full font-medium transition text-[1rem] md:text-[1.3rem]"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Response Message */}
          {responseMessage && (
            <p className="mt-3 text-center font-medium">{responseMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
