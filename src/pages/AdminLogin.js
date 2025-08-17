import React from "react";
import loginLogo from "./../assets/images/login/loginLogo.svg";

const AdminLogin = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4">
      <div className="flex flex-col md:flex-row gap-6 w-full md:w-[60%]">
        
        {/* Left Image */}
        <div className="w-full mt-[6rem] md:mt-0 md:w-[49%] flex justify-center items-center">
          <img
            src={loginLogo}
            alt="Login Logo"
            className="w-[80%] md:w-full h-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-[49%] flex flex-col items-center">
          <p className="m-0 text-[1.5rem] font-semibold">Login</p>

          <div className="mt-6 md:mt-10 w-full flex flex-col gap-3">
            {/* Username */}
            <div className="flex flex-col w-full">
              <label className="text-sm md:text-base">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full bg-[#D9D9D9] rounded-xl px-4 py-2 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col w-full">
              <label className="text-sm md:text-base">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full bg-[#D9D9D9] rounded-xl px-4 py-2 focus:outline-none"
              />
              <p className="mt-1 text-[0.85rem] text-[#000000] text-end cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center mt-6 md:mt-10 mb-4 md:mb-0">
            <button className="bg-[#373737] text-[#FFFFFF] py-2 px-12 md:px-16 rounded-3xl">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
