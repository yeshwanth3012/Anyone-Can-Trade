import React, { useState } from "react";
import { ChevronDown, ChevronUp, Edit, Trash2 } from "lucide-react";

const dummyUsers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    age: 27,
    mobile: "+91 7382020707",
    email: "ramesh.kumar@example.com",
    profession: "Part-time",
    capital: "5-10 lakhs",
    monthlyReturn: "5-10 %",
    experience: "3 years and above",
    learnedFrom: "Online Paid Course",
    consistentProfits: "Yes",
    tradingStyle: "Intraday",
    mentorshipFee: "Yes",
  },
  {
    id: 2,
    name: "Suresh Verma",
    age: 32,
    mobile: "+91 9988776655",
    email: "suresh.verma@example.com",
    profession: "Full-time",
    capital: "10-20 lakhs",
    monthlyReturn: "10-15 %",
    experience: "5 years",
    learnedFrom: "Self Learning",
    consistentProfits: "No",
    tradingStyle: "Swing",
    mentorshipFee: "No",
  },
  {
    id: 3,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
    {
    id: 4,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
    {
    id: 5,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
    {
    id: 6,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
    {
    id: 7,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
    {
    id: 8,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
      {
    id: 9,
    name: "Anita Sharma",
    age: 24,
    mobile: "+91 9876543210",
    email: "anita.sharma@example.com",
    profession: "Part-time",
    capital: "1-5 lakhs",
    monthlyReturn: "2-5 %",
    experience: "1 year",
    learnedFrom: "Mentorship",
    consistentProfits: "Yes",
    tradingStyle: "Options",
    mentorshipFee: "Yes",
  },
];

const AdminDashboard = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

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
                User NAME {user.name}
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
            {expandedId === user.id && (
              <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-[1.1rem]">
                <div className="space-y-2 sm:space-y-3">
                  <p>
                    <span className="font-semibold">Age:</span> {user.age}
                  </p>
                  <p>
                    <span className="font-semibold">Mobile:</span> {user.mobile}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="font-semibold">Profession:</span>{" "}
                    {user.profession}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    {user.capital}
                  </p>
                  <p>
                    <span className="font-semibold">Monthly Return:</span>{" "}
                    {user.monthlyReturn}
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {user.experience}
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p>
                    <span className="font-semibold">Learned From:</span>{" "}
                    {user.learnedFrom}
                  </p>
                  <p>
                    <span className="font-semibold">Profits:</span>{" "}
                    {user.consistentProfits}
                  </p>
                  <p>
                    <span className="font-semibold">Style:</span>{" "}
                    {user.tradingStyle}
                  </p>
                  <p>
                    <span className="font-semibold">Fee Ready:</span>{" "}
                    {user.mentorshipFee}
                  </p>
                </div>
              </div>
            )}
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
