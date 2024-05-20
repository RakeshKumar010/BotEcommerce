import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditCoupon = () => {
  const location = useLocation();
  const navigater = useNavigate();
  const [title, setTitle] = useState("");
  const [discount, setDiscount] = useState("");
  const [code, setCode] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "http://65.2.144.134:3000/coupon/" +
        location.pathname.split("/").pop(),
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, discount, code, expiryDate }),
      }
    );

    if (response.ok) {
      Swal.fire({
        title: "Success",
        text: "Edited successfully!",
        icon: "success",
      });
      setTimeout(() => {
        navigater("/admin/coupon");
      }, 1000);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch(
        "http://65.2.144.134:3000/coupon/" +
          location.pathname.split("/").pop()
      );
      result = await result.json();
      setTitle(result.title);
      setDiscount(result.discount);
      setCode(result.code);
      setExpiryDate(result.expiryDate);
    };
    getFun();
  }, []);
  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-2xl font-bold text-teal-400">
          Edit Coupon
        </h1>
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
          className="bg-teal-400 w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCoupon;
