import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectPage = ({title,router}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-500 ease-in-out">
      <div className="bg-white p-10 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Access Denied</h1>
        <p className="mb-4 text-lg text-gray-700">You cannot directly open the {title} Panel.</p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-3 mb-2 w-full bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors duration-200"
        >
          <i className="fas fa-home mr-2"></i> Back To Home
        </button>
        <button
          onClick={() => {
            navigate(router);
          }}
          className="p-3 w-full bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          <i className="fas fa-user-shield mr-2"></i> {title} Login
        </button>
      </div>
    </div>
  );
};

export default RedirectPage;
