import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Mentorship from "./pages/Mentorship";
import InputForm from "./pages/InputForm";
import PersonalForm from "./components/PersonalForm";
import TradingForm from "./components/TradingForm";
import TradingFormYodha from "./components/TradingFormYodha";
import AdminLogin from "./pages/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/mentorship" element={<Mentorship />} />
      {/* <Route path="/form" element={<InputForm />} /> */}
      <Route path="/form/:type" element={<PersonalForm />}/>
      <Route path="/trading-form/mastery" element={<TradingForm />} />
      <Route path="/trading-form/yodha" element={<TradingFormYodha />} />
      <Route path="/admin/login" element={<AdminLogin />}/>
            {/* Protected Route */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Route>
  </Routes>
  </>
);

export default AppRoutes;
