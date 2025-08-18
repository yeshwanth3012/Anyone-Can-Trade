import React, { useState } from "react";
import { ChevronDown, ChevronUp, Edit, Trash2 } from "lucide-react";
import TradingFormYodha from "../components/TradingFormYodha";
import TradingForm from "../components/TradingForm";

const dummyUsers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    age: 27,
    email: "ramesh.kumar@example.com",
    phoneNumber: "+91 7382020707",
    currency: "INR",
    amount: 5000,
    courseType: "ACHIEVER",
    paymentId: "pay_yodha123",
  },
  {
    id: 2,
    name: "Suresh Verma",
    age: 32,
    email: "suresh.verma@example.com",
    phoneNumber: "+91 9988776655",
    currency: "INR",
    amount: 15000,
    courseType: "PRO",
    paymentId: "pay_yodha123",
  },
  {
    id: 3,
    name: "Anita Sharma",
    age: 24,
    email: "anita.sharma@example.com",
    phoneNumber: "+91 9876543210",
    currency: "INR",
    amount: 25000,
    courseType: "YODHA",
    paymentId: "pay_yodha123",
    yodhaForm: {
      profession: "Salaried",
      income: "Less than 50K",
      reason: "Part time trader",
      style: "Swing",
      capital: "5 to 10 lakhs",
      returnRate: "2-5%",
      experience: "1-3 years",
      learningMethod: "Paid online courses",
      consistentProfit: "No",
      mentorshipFee: "Yes",
    },
  },
  {
    id: 4,
    name: "Vikas Singh",
    age: 29,
    email: "vikas.singh@example.com",
    phoneNumber: "+91 9871112222",
    currency: "INR",
    amount: 80000,
    courseType: "MASTERY",
    paymentId: "pay_mastery456",
    masteryForm: {
      profession: "Salaried",
      income: "Less than 50K",
      reason: "Part time trader",
      style: "Intraday",
      capital: "Less than 2 lakhs",
      mentorship: "Yes",
    },
  },
];
const AdminDashboard = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  // Pagination
  const totalPages = Math.ceil(dummyUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = dummyUsers.slice(startIndex, startIndex + usersPerPage);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="mt-[7rem] mb-[2rem] md:mb-0 px-3 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-normal text-center mb-8">
        ADMIN DASHBOARD
      </h1>
      <h2 className="text-xl sm:text-2xl font-normal text-center mb-6">
        USER PROFILES
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-3">
        {currentUsers.map((user) => (
          <div key={user.id} className="w-full">
            {/* Row */}
            <div
              className={`flex justify-between items-center px-3 sm:px-4 py-3 cursor-pointer rounded-lg hover:bg-[#D9D9D9] ${
                expandedId === user.id ? "bg-[#D9D9D9]" : "bg-[#F0F0F0]"
              }`}
              onClick={() => toggleExpand(user.id)}
            >
              <span className="text-sm sm:text-base font-medium truncate max-w-[200px] sm:max-w-none">
                {`Name: ${user.name}`} &nbsp;&nbsp;
                {`Email: ${user.email}`}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="hover:text-red-600">
                  <Trash2 size={18} />
                </button>
                <button className="hover:text-blue-600">
                  <Edit size={18} />
                </button>
                {expandedId === user.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {
              expandedId === user.id &&
                (user.courseType === "YODHA" ? (
                  <>
                    <div className="mt-4 mb-4 flex flex-col gap-5">
                      {/* Row 1 */}
                      <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                        <p className="sm:w-[37%]">
                          <span className="font-semibold">Email:</span>{" "}
                          {user.email}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Age:</span> {user.age}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Mobile:</span>{" "}
                          {user.phoneNumber}
                        </p>
                      </div>

                      {/* Row 2 */}
                      <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                        <p className="sm:w-[37%]">
                          <span className="font-semibold">Payment Id:</span>{" "}
                          {user.paymentId}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Amount:</span>{" "}
                          {user.amount}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Course:</span>{" "}
                          {user.courseType}
                        </p>
                      </div>
                    </div>

                    <TradingFormYodha form={user.yodhaForm} />
                  </>
                ) : user.courseType === "MASTERY" ? (
                  <>
                    <div className="mt-4 mb-4 flex flex-col gap-5">
                      {/* Row 1 */}
                      <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                        <p className="sm:w-[37%]">
                          <span className="font-semibold">Email:</span>{" "}
                          {user.email}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Age:</span> {user.age}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Mobile:</span>{" "}
                          {user.phoneNumber}
                        </p>
                      </div>

                      {/* Row 2 */}
                      <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                        <p className="sm:w-[37%]">
                          <span className="font-semibold">Payment Id:</span>{" "}
                          {user.paymentId}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Amount:</span>{" "}
                          {user.amount}
                        </p>
                        <p className="sm:w-[30%]">
                          <span className="font-semibold">Course:</span>{" "}
                          {user.courseType}
                        </p>
                      </div>
                    </div>

                    <TradingForm form={user.masteryForm} />
                  </>
                ) : user.courseType === "ACHIEVER" ? (
                  <div className="mt-4 mb-4 flex flex-col gap-5">
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                      <p className="sm:w-[37%]">
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Age:</span> {user.age}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Mobile:</span>{" "}
                        {user.phoneNumber}
                      </p>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                      <p className="sm:w-[37%]">
                        <span className="font-semibold">Payment Id:</span>{" "}
                        {user.paymentId}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Amount:</span>{" "}
                        {user.amount}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Course:</span>{" "}
                        {user.courseType}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 mb-4 flex flex-col gap-5">
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                      <p className="sm:w-[37%]">
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Age:</span> {user.age}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Mobile:</span>{" "}
                        {user.phoneNumber}
                      </p>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                      <p className="sm:w-[37%]">
                        <span className="font-semibold">Payment Id:</span>{" "}
                        {user.paymentId}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Amount:</span>{" "}
                        {user.amount}
                      </p>
                      <p className="sm:w-[30%]">
                        <span className="font-semibold">Course:</span>{" "}
                        {user.courseType}
                      </p>
                    </div>
                  </div>
                ))
              // <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-[1.1rem]">
              //   <div className="space-y-2 sm:space-y-3">
              //     <p>
              //       <span className="font-semibold">Age:</span> {user.age}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Mobile:</span> {user.mobile}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Email:</span> {user.email}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Profession:</span>{" "}
              //       {user.profession}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Capital:</span>{" "}
              //       {user.capital}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Monthly Return:</span>{" "}
              //       {user.monthlyReturn}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Experience:</span>{" "}
              //       {user.experience}
              //     </p>
              //   </div>

              //   <div className="space-y-2 sm:space-y-3">
              //     <p>
              //       <span className="font-semibold">Learned From:</span>{" "}
              //       {user.learnedFrom}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Profits:</span>{" "}
              //       {user.consistentProfits}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Style:</span>{" "}
              //       {user.tradingStyle}
              //     </p>
              //     <p>
              //       <span className="font-semibold">Fee Ready:</span>{" "}
              //       {user.mentorshipFee}
              //     </p>
              //   </div>
              // </div>
            }
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2 text-sm sm:text-base">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-2 sm:px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 sm:px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-2 sm:px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
