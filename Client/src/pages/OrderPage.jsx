import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";

const OrderPage = () => {
  const [sessionData, setSessionData] = useState();
  const [pageLoad, setPageLoad] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const storedObject = JSON.parse(sessionStorage.getItem("myObject"));
    setSessionData(storedObject);
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/coupon");
      result = await result.json();
      setData(result);

      setPageLoad(result);
    };

    getFun();
  }, [pageLoad]);
  return (
    <>
      <HeaderTop />
      <NavBar />
      <div className="flex md:flex-row flex-col-reverse  md:w-[80vw] w-[95vw] mx-auto gap-5 p-3 md:p-5">
        <div className="md:w-1/2 w-full flex flex-col gap-4 ">
          <div className="flex justify-between">
            <p className="text-lg font-bold">Contact</p>
            <Link to={"#"} className="underline">
              Log In
            </Link>
          </div>
          <input
            type="text"
            placeholder="Email or mobile phone number"
            className="w-full rounded-md"
          />
          <div className="flex items-center gap-1">
            <input type="checkbox" className="rounded-md" />
            <p>Email me with news and offers</p>
          </div>
          <p className="text-lg font-bold">Delivery</p>
          <div className="flex flex-col gap-4">
           
            <div className="flex justify-between flex-wrap gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-md"
              />
            </div>
            <input
              type="text"
              className="w-full rounded-md"
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full rounded-md"
              placeholder="Apartment, suite, etc. (Optional)"
            />
            <div className="flex justify-between gap-3 w-full rounded-md">
              <input
                type="text"
                className="w-[32%] rounded-md"
                placeholder="City"
              />
              <input
                type="text"
                className="w-[32%] rounded-md"
                placeholder="State"
              />
              <input
                type="text"
                className="w-[32%] rounded-md"
                placeholder="PIN code"
              />
            </div>
            <input type="text" placeholder="phone" className="rounded-md" />
            <p className="text-lg font-bold ">Delivery</p>
            <div className="flex justify-between border-2 border-gray-400 p-2 rounded-md">
              <p>Standard</p>
              <p>Free</p>
            </div>
            <p className="text-lg font-bold ">Billing address</p>
            <div className="flex border py-4 px-2 gap-2 items-center border-gray-500 rounded-md">
              <input type="checkbox" className="rounded-full " />
              <p>Same as shipping address</p>
            </div>
            <div className="flex border py-4 px-2 gap-2 items-center border-gray-500 rounded-md">
              <input type="checkbox" className="rounded-full" />
              <p>Use a different billing address</p>
            </div>

            <p className="text-center p-4 w-full bg-[#ac384b] text-white rounded-md  hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600">
              Pay now
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:p-5 flex flex-col gap-5">
          <div className="flex gap-3 items-start">
            <img
              src={`https://botecommerce.onrender.com/${
                sessionData
                  ? sessionData.imageUrl
                  : "https://cdn.shopify.com/s/files/1/0839/4647/1697/files/DSC_1321copy_64x64.jpg?v=1711732690"
              }`}
              alt="Product Image"
              className="h-16 rounded-sm shadow-md"
            />
            <div>
              <p className="text-lg font-bold text-gray-700">
                {sessionData ? sessionData.title : null}
              </p>
              <p className="text-sm text-gray-500">
                {sessionData ? sessionData.sizes : null}
              </p>
            </div>
            <p className="text-lg font-bold text-green-500">
              ₹
              {sessionData ? sessionData.currentPrice * sessionData.number : ""}
            </p>
          </div>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              {sessionData ? sessionData.massage : ""}
            </p>
          </div>
          <div className="p-5 bg-gray-100">
            {data &&
              data.map(({ title, discount, code, expiryDate }) => {
                return (
                  <div className="flex flex-wrap justify-between w-full bg-white shadow-lg rounded-lg p-5 mb-5">
                    <div>
                      <h2 className="text-xl font-bold text-gray-700">
                        {title}
                      </h2>
                      <p className="text-sm text-gray-500">Code: {code}</p>
                    </div>
                    <div className="flex md:flex-row flex-row-reverse justify-between  w-full items-center">
                      <span className="text-lg font-bold text-green-500">
                        {discount} off
                      </span>
                      <span className="md:ml-3 text-sm text-gray-500">
                        Expires on: {expiryDate}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex w-full gap-3 justify-between items-center bg-white p-3 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Discount Code"
              className="w-full rounded-md p-2 border border-gray-300"
            />
            <button className="bg-[#ac384b] text-white p-2 rounded-md hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600 ">
              Apply
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Subtotal</p>
              <p className="text-lg font-bold text-gray-700">
                ₹
                {sessionData
                  ? sessionData.currentPrice * sessionData.number
                  : ""}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Shipping</p>
              <p className="text-lg font-bold text-green-500">FREE</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Tax</p>
              <p className="text-lg font-bold text-green-500">₹20.2</p>
            </div>
            <div className="flex justify-between font-bold text-xl mt-2">
              <p className="text-gray-800">Total</p>
              <p className="text-green-500">
                INR ₹
                {sessionData
                  ? sessionData.currentPrice * sessionData.number+20.2
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
