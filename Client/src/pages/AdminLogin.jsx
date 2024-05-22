// import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { jwtDecode } from "jwt-decode";
const AdminLogin = ({ setIsAdmin }) => {
  // let screenWidth = window.innerWidth;
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://43.204.35.127:3000/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });

    if (response.ok) {
      setIsAdmin(true);
      let user = {
        email,
        pass,
      };
      let userString = JSON.stringify(user);
      localStorage.setItem("user", userString);

      navigate("/admin");
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Password",
        text: `You have only 3 attems `,
      });
    }
  };
  return (
    <div className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-500 ease-in-out">
      <div className="animate-bounce">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white transform hover:scale-110 transition-transform duration-300 ease-in-out">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white p-6 rounded-lg shadow-md ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-lg font-semibold text-gray-700">Email address</p>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-700">Password</p>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-gray-600 hover:text-gray-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center ">
            <button
              type="submit"
              className="p-3 w-full bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-200"
            >
              <i className="fas fa-user-shield mr-2"></i> Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
