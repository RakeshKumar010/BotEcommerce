import React, { useEffect, useState } from "react"; 
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import { ApiColor } from "../components/api/data";
const baseUrl = import.meta.env.VITE_APP_URL;

const CartOrder = () => {
  const [localData, setLocalData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountCode,setDiscountCode]=useState('')
  const [data, setData] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [paymentMValue, setPaymentMValue] = useState("");

  const paymentMethod = (event) => {
    setPaymentMValue(event.target.value);
  };

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = String(date.getDate()).padStart(2, '0');

    setCurrentDate(`${year}-${month}-${day}`);
    const storedObject = JSON.parse(localStorage.getItem("myCart"));
    if (storedObject) {
      setLocalData(storedObject);
      const total = storedObject.reduce((total, item) => {
        return total + item.currentPrice * item.number;
      }, 0);

      setTotalPrice(total.toFixed(1));
    }
    setLocalData(storedObject);
    const getFun = async () => {
      let result = await fetch(`${baseUrl}/coupon`);
      result = await result.json();
      setData(result);
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
          <button style={{backgroundColor:ApiColor}} className=" p-3 text-white uppercase rounded-md">
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
            
            <div className="md:static bg-white md:p-0 p-2  fixed bottom-0 right-0 left-0">
              <p style={{backgroundColor:ApiColor}} className="text-center p-4 w-full   text-white rounded-md  hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600">
                Pay now
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:p-5 flex flex-col gap-5">
          {localData &&
            localData.map(
              ({ title, currentPrice, sizes, imageUrl }) => {
                return (
                  <div className="flex gap-3 items-start">
                    <img
                      src={`${baseUrl}/${imageUrl}`}
                      alt="Product Image"
                      className="h-16 rounded-sm shadow-md"
                    />
                    <div>
                      <p className="text-lg font-bold text-gray-700">{title}</p>
                      <p className="text-sm text-gray-500">{sizes}</p>
                    </div>
                    <p className="text-lg font-bold text-green-500">
                      ₹{currentPrice}
                    </p>
                  </div>
                );
              }
            )}

          <div className="p-5 bg-gray-100 h-72  overflow-y-scroll">
            {data &&
              data.map(({ title, discount, code, expiryDate }) => {
                return (
                  <div className={`flex  flex-wrap justify-between w-full  shadow-lg rounded-lg p-5 mb-5 ${expiryDate<currentDate?'bg-red-100':'bg-white'}`}>
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
                      <span className={`md:ml-3 text-sm  ${expiryDate<currentDate?'text-red-500':'text-gray-500'}`}>
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
              value={discountCode}
              onChange={(e) => {
                setDiscountCode(e.target.value);
              }}
              placeholder="Discount Code"
              className="w-full rounded-md p-2 border border-gray-300"
            />
            <button style={{backgroundColor:ApiColor}} className=" text-white p-2 rounded-md hover:scale-105 transition-all duration-200  hover:shadow-md hover:shadow-gray-600 ">
              Apply 
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Subtotal</p>
              <p className="text-lg font-bold text-gray-700">₹{totalPrice}</p>
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
              <p className="text-green-500">INR ₹{totalPrice + 20.2}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartOrder;
