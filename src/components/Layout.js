import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import whatsApp from "./../assets/images/testimonial/whatsapp.svg";

export default function Layout() {
  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/admin/login");

  const hideWhatsApp =
    location.pathname.startsWith("/mentorship") ||
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/admin/login");

  return (
    <div className="overflow-hidden bg-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* WhatsApp Floating Button */}
      {!hideWhatsApp && (
        <div
          onClick={() =>
            window.open(
              "https://wa.me/9392692459?text=Hey%2C%20TMI!",
              "_blank"
            )
          }
          className="fixed bottom-4 right-10 cursor-pointer flex flex-col items-center gap-1 z-50"
        >
          <img src={whatsApp} className="w-10 h-10" alt="WhatsApp" />
          <p className="text-[0.8rem] text-black">WhatsApp</p>
        </div>
      )}

      {/* Footer */}
      {!hideFooter && (
        <footer className="bg-gray-100 text-gray-700 text-sm px-6 py-6 border-t">
          <div className="max-w-7xl mx-auto space-y-4 text-center md:text-left">
            {/* Disclaimer */}
            <p className="font-bold">
              <span className="font-bold">Disclaimer:</span> This program is
              for educational purposes only. We do not provide financial advice,
              investment recommendations, or guaranteed returns. Results vary
              based on individual effort, discipline, and market conditions.
              Trading and investing involve risk. Users are responsible for
              their own decisions. Trading Masters of India and Dr. Rahul K.P.
              are not SEBI registered advisors.
            </p>

            {/* Privacy Policy */}
            <p className="font-bold">
              <span className="font-bold">Privacy Policy:</span> Your data is
              used only for communication and service improvement. We never sell
              your data.
            </p>

            {/* Copyright */}
            <p className="text-center text-xl text-gray-500 pt-2">
              © 2026 KP RAHUL | Trading Masters of India. All rights
              reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
