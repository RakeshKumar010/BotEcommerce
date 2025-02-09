import React, { useEffect, useState } from "react";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_APP_URL;

const OrderPage = () => {
  const [sessionData, setSessionData] = useState();
  const [discountCode, setDiscountCode] = useState("");
  const [data, setData] = useState();
  const [couponData, setCouponData] = useState("");
  const [currentDate, setCurrentDate] = useState();
  const [paymentMValue, setPaymentMValue] = useState("");

  const paymentMethod = (event) => {
    setPaymentMValue(event.target.value);
  };

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
    const day = String(date.getDate()).padStart(2, "0");

    setCurrentDate(`${year}-${month}-${day}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const storedObject = JSON.parse(sessionStorage.getItem("myObject"));
    setSessionData(storedObject);

    const getFun = async () => {
      let result = await fetch(`${baseUrl}/coupon`);
      result = await result.json();

      const reversedCoupons = result.reverse();
      setData(reversedCoupons);
    };
    getFun();
  }, []);
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="flex md:flex-row flex-col-reverse  md:w-[80vw] w-[95vw] mx-auto gap-5 p-3 md:p-5">
        <div className="md:w-1/2 w-full flex flex-col gap-4 ">
          <div className="flex justify-between">
            <p className="text-lg font-bold">Login or Sigup</p>
          </div>
          <input
            type="text"
            placeholder="Email or mobile phone number"
            className="w-full rounded-md"
          />
          <button
            style={{ backgroundColor: "black" }}
            className=" p-3 text-white uppercase rounded-md"
          >
            Generate otp
          </button>
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
            <p className="text-lg font-bold ">Delivery Method</p>
            <div className="w-full">
              <div className="relative">
                <select
                  onChange={paymentMethod}
                  value={paymentMValue}
                  className="block appearance-none w-full bg-white border focus:ring-0 focus:outline-0 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="cod">Cash On Delivery</option>
                  <option value="direct-pay">Direct Payment</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 6l10 10 10-10z" />
                  </svg>
                </div>
              </div>
            </div>

            <Link
              to={"/thanku-page"}
              className="md:static bg-white md:p-0 p-2  fixed bottom-0 right-0 left-0"
            >
              <p
                style={{ backgroundColor: "black" }}
                className="text-center p-4 w-full  text-white rounded-md  hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600"
              >
                Pay now
              </p>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:p-5 flex flex-col gap-5">
          <div className="flex gap-3 items-start">
            <img
              src={
                sessionData
                  ? sessionData.imageUrl
                  : "https://cdn.shopify.com/s/files/1/0839/4647/1697/files/DSC_1321copy_64x64.jpg?v=1711732690"
              }
              alt="Product Image"
              className="h-16 rounded-sm  shadow-md"
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
          <div className="p-5 bg-gray-100 h-72  overflow-y-scroll">
            {data &&
              data.map(({ title, discount, code, expiryDate }) => {
                return (
                  <div
                    className={`flex  flex-wrap justify-between w-full  shadow-lg rounded-lg p-5 mb-5 ${
                      expiryDate < currentDate ? "bg-red-100" : "bg-white"
                    }`}
                  >
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
                      <span
                        className={`md:ml-3 text-sm  ${
                          expiryDate < currentDate
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        Expires on: {expiryDate}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              let result = await fetch(
                `${baseUrl}/coupon/${discountCode}`
              );
              result = await result.json();
              if(result.expiryDate<currentDate){
                alert('Coupon Expiry')
              }else{

                setCouponData(result);
              }

            
            }}
            className="flex w-full gap-3 justify-between items-center bg-white p-3 rounded-md shadow-md"
          >
            <input
              type="text"
              value={discountCode}
              onChange={(e) => {
                setDiscountCode(e.target.value);
              }}
              placeholder="Discount Code"
              className="w-full rounded-md p-2 border border-gray-300"
            />
            <button
              type="submit"
              style={{ backgroundColor: "black" }}
              className="  text-white p-2 rounded-md hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600 "
            >
              Apply
            </button>
          </form>
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
            {couponData ? (
              <div className="flex justify-between">
                <p className="text-lg font-bold text-gray-700">Discount</p>
                <p className="text-lg font-bold text-green-500">
                  {couponData.discount}
                </p>
              </div>
            ) : null}
            <div className="flex justify-between font-bold text-xl mt-2">
              <p className="text-gray-800">Total</p>
              <p className="text-green-500">
                INR ₹
                {sessionData
                  ? couponData
                    ? (
                        sessionData.currentPrice * sessionData.number +
                        20.2 -
                        ((sessionData.currentPrice * sessionData.number +
                          20.2) *
                          parseInt(couponData.discount)) /
                          100
                      ).toFixed(1)
                    : sessionData.currentPrice * sessionData.number + 20.2
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
