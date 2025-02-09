import React, { useState } from "react";
import Swal from 'sweetalert2'
import { ApiColor } from "../api/data";
const baseUrl = import.meta.env.VITE_APP_URL;

const AddCoupon = () => {
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");
  const [code, setCode] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    let clientId=user._id
 
    let response = await fetch(`${baseUrl}/add-coupon`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ clientId,title,discount,code,expiryDate }),
    });

    if (response.ok) {
     
     
      Swal.fire({
        title: "Success",
        text: "Coupon added successfully!",
        icon: "success",
          confirmButtonColor: `${ApiColor?ApiColor:'black'}`,
      });
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };
  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
      >
        <h1 style={{color:ApiColor}} className="text-center text-2xl font-bold ">Add Coupon</h1>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Discount</p>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Code</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Expiry Date
          </p>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          style={ApiColor?{backgroundColor:ApiColor}:{backgroundColor:'black'}}
          className=" w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCoupon;
