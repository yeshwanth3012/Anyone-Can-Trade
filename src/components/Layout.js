import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import whatsApp from "./../assets/images/testimonial/whatsapp.svg";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="overflow-hidden bg-white">
      {/* Header and Content */}
      <div className="">
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      {location.pathname !== "/mentorship" && (
        <div
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
        </div>
      )}
    </div>
  );
}
