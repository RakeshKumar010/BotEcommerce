// import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  
const baseUrl = import.meta.env.VITE_APP_URL;


const AdminLogin = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [countWPass, setCountWPass] = useState(0);
  const [counter, setCounter] = useState(30);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (countWPass >= 3) {
      Swal.fire({
        icon: "error",
        title: "Too Many Attempts",
        text: `Please wait for ${counter} seconds before trying again.`,
      });
      return;
    }

    let response = await fetch(`${baseUrl}/login`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });
    response = await response.json();

    console.log(response);
    if (response.status == "1") {
      let { _id, name, email, pass } = response;

      // Handle successful login
      setIsAdmin(true);
      let user = { _id, name, email, pass };
      let userString = JSON.stringify(user);
      localStorage.setItem("user", userString);
      navigate("/admin");
    } else if (response.status == "deactivate") {
      Swal.fire({
        icon: "error",
        title: "Deactivated Account",
        text: `Your Account is Deactivated`,
      });
    } else {
      // Increment the wrong password count
      setCountWPass((prevCount) => prevCount + 1);
      Swal.fire({
        icon: "error",
        title: "Incorrect Password",
        text: `You have ${3 - countWPass} attempts left.`,
        confirmButtonColor: `${'black'}`,
      });
    }
  };

    // Effect to handle the countdown
    useEffect(() => {
      let intervalValue;
      if (countWPass === 3) {
        intervalValue = setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
        }, 1000);
      }
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalValue);
    }, [countWPass]);
  return (
    <div style={{background:'slategrey'}} className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8  transition-all duration-500 ease-in-out">
      <div className="animate-bounce">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white transform   ">
          {countWPass == 3 ? counter : "Sign in to your account"}
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
               
              disabled={countWPass >= 3} // This will disable the button when countWPass is 3 or more
              className={`p-3 w-full  text-white rounded-md shadow-md ${
                countWPass >= 3 ? "bg-blue-300" : " bg-blue-500  hover:bg-blue-600" 
              } transition-colors duration-200`}
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
