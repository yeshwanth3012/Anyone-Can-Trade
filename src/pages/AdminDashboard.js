import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Edit, Trash2 } from "lucide-react";
import TradingFormYodha from "../components/TradingFormYodha";
import TradingForm from "../components/TradingForm";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 10;

  // Fetch data from API using fetch()
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.tradingmastersindia.com/api");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        console.log("Raw Data:", data);

        // Sort by createdAt in descending order (latest first)
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        console.log("Sorted Data:", sortedData);

        setUsers(sortedData); // Update state with sorted data
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);


  // Pagination logic
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

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

      <div className="max-w-6xl mx-auto flex flex-col gap-3">
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
                {`Name: ${user.name},`} &nbsp;&nbsp;
                {`Phone Number: ${user.phoneNumber},`} &nbsp;&nbsp; 
                {`Course Type : ${user.courseType},`}&nbsp;&nbsp; 
                {`Transaction Id : ${user.transactionId || ""}`}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* <button className="hover:text-red-600">
                  <Trash2 size={18} />
                </button>
                <button className="hover:text-blue-600">
                  <Edit size={18} />
                </button> */}
                {expandedId === user.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </div>

            {/* Expanded Content */}
            {expandedId === user.id && (
              <>
                <div className="mt-4 mb-4 flex flex-col gap-5">
                  {/* Row 1 */}
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

                  {/* Row 2 */}
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

                {/* Show Form based on course type */}
                {user.courseType === "YODHA" && (
                  user?.form ? <TradingFormYodha form={user?.form?.formData} /> : <p className="text-center font-bold">User has not submitted the form.</p>
                )}
                {user.courseType === "MASTERY" && (
                  user?.form ? <TradingForm form={user?.form?.formData} />: <p className="text-center font-bold">User has not submitted the form.</p>
                )}
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
