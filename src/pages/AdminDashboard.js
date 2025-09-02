import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TradingFormYodha from "../components/TradingFormYodha";
import TradingForm from "../components/TradingForm";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Filter states
  const [courseType, setCourseType] = useState("");
  const [ageOperator, setAgeOperator] = useState("greater");
  const [ageValue, setAgeValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const usersPerPage = 10;
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.tradingmastersindia.com/api");
      if (!response.ok) throw new Error("Failed to fetch user data");

      const data = await response.json();

      // Filter PENDING users first, then sort by createdAt desc
      const filteredData = data
        .filter((user) => user.status != "PENDING")
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      setUsers(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  fetchUsers();
}, []);

     
  // 🔹 Apply filters
  const filteredUsers = users.filter((user) => {
    let valid = true;

    // Course type
    if (courseType && user.courseType !== courseType) valid = false;

    // Age
    if (ageValue) {
      const age = Number(user.age);
      const target = Number(ageValue);

      if (ageOperator === "greater" && !(age > target)) valid = false;
      if (ageOperator === "less" && !(age < target)) valid = false;
      if (ageOperator === "equal" && !(age === target)) valid = false;
    }

    // Date range
   const userDate = new Date(user.createdAt);

      if (startDate && !endDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        userDate.setHours(0, 0, 0, 0);

        if (userDate < start) valid = false;
      }

      // Only end date
      if (!startDate && endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        userDate.setHours(0, 0, 0, 0);

        if (userDate > end) valid = false;
      }

      // Both start & end date
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        userDate.setHours(0, 0, 0, 0);

        if (userDate < start || userDate > end) {
          valid = false;
        }
      }


    return valid;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // 🔹 Reset Filters
  const resetFilters = () => {
    setCourseType("");
    setAgeOperator("greater");
    setAgeValue("");
    setStartDate("");
    setEndDate("");
    setCurrentPage(1);
  };

  return (
    <div className="mt-[7rem] mb-[2rem] md:mb-0 px-3 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-normal text-center mb-8">
        ADMIN DASHBOARD
      </h1>
      <h2 className="text-xl sm:text-2xl font-normal text-center mb-6">
        USER PROFILES
      </h2>

      {/* 🔹 Filters */}
      <div className="max-w-6xl mx-auto mb-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          {/* Course Type */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Course Type</label>
            <select
              value={courseType}
              onChange={(e) => setCourseType(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All</option>
              <option value="YODHA">Yodha</option>
              <option value="MASTERY">Mastery</option>
              <option value="ACHIEVER">Achiever</option>
              <option value="PRO">Pro</option>
            </select>
          </div>

          {/* Age Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Age Filter</label>
            <div className="flex gap-2">
              <select
                value={ageOperator}
                onChange={(e) => setAgeOperator(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="greater">Greater than</option>
                <option value="less">Less than</option>
                <option value="equal">Equal</option>
              </select>
              <input
                type="number"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                placeholder="Age"
                className="border p-2 rounded w-24"
              />
            </div>
          </div>

          {/* Date Range */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        {currentUsers.map((user) => (
          <div key={user.id} className="w-full">
           <div
              className={`flex justify-between items-center px-3 sm:px-4 py-3 cursor-pointer rounded-lg hover:bg-[#D9D9D9] ${
                expandedId === user.id ? "bg-[#D9D9D9]" : "bg-[#F0F0F0]"
              }`}
              onClick={() => toggleExpand(user.id)}
            >
              <div className="flex flex-1 justify-between text-sm sm:text-base font-medium gap-4">
                <span className="flex-1 min-w-0 truncate">{`Name: ${user.name}`}</span>
                <span className="flex-1 min-w-0 truncate">{`Phone: ${user.phoneNumber}`}</span>
                <span className="flex-1 min-w-0 truncate">{`Course: ${user.courseType}`}</span>
                <span className="flex-1 min-w-0 truncate">{`Txn: ${user.transactionId || "N/A"}`}</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 ml-4">
                {expandedId === user.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>


            {expandedId === user.id && (
              <>
                <div className="mt-4 mb-4 flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                    <p className="sm:w-[37%]">
                      <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <p className="sm:w-[30%]">
                      <span className="font-semibold">Age:</span> {user.age}
                    </p>
                    <p className="sm:w-[30%]">
                      <span className="font-semibold">Mobile:</span>{" "}
                      {user.phoneNumber}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-[4rem] mx-3 gap-3">
                    <p className="sm:w-[37%]">
                      <span className="font-semibold">Transaction Id:</span>{" "}
                      {user.transactionId}
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

                {/* Form */}
                {user.courseType === "YODHA" &&
                  (user?.form ? (
                    <TradingFormYodha form={user?.form?.formData} />
                  ) : (
                    <p className="text-center font-bold">
                      User has not submitted the form.
                    </p>
                  ))}

                {user.courseType === "MASTERY" &&
                  (user?.form ? (
                    <TradingForm form={user?.form?.formData} />
                  ) : (
                    <p className="text-center font-bold">
                      User has not submitted the form.
                    </p>
                  ))}
              </>
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
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          disabled={currentPage === totalPages || totalPages === 0}
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
