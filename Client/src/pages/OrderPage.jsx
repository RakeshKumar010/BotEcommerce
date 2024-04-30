import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";

const OrderPage = () => {
  return (
    <>
      <HeaderTop />
      <NavBar />
      <div className="flex md:flex-row flex-col-reverse  md:w-[80vw] w-[95vw] mx-auto gap-5 p-5">
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
            className="w-full"
          />
          <div className="flex items-center gap-1">
            <input type="checkbox" />
            <p>Email me with news and offers</p>
          </div>
          <p className="text-lg font-bold">Delivery</p>
          <div className="flex flex-col gap-4">
            <select className="w-full">
              <option value="in">India</option>
              <option value="usa">Usa</option>
            </select>
            <div className="flex justify-between flex-wrap gap-4">
              <input type="text" placeholder="First name" className="w-full" />
              <input type="text" placeholder="Last name"  className="w-full"/>
            </div>
            <input type="text" className="w-full" placeholder="Address" />
            <input
              type="text"
              className="w-full"
              placeholder="Apartment, suite, etc. (Optional)"
            />
            <div className="flex justify-between gap-3 w-full">
              <input type="text" className="w-[32%]" placeholder="City" />
              <input type="text" className="w-[32%]" placeholder="State" />
              <input type="text" className="w-[32%]" placeholder="PIN code" />
            </div>
            <input type="text" placeholder="phone" />
            <p className="text-lg font-bold ">Delivery</p>
            <div className="flex justify-between border-2 border-gray-400 p-2">
              <p>Standard</p>
              <p>Free</p>
            </div>
            <p className="text-lg font-bold">Billing address</p>
            <div className="flex border py-4 px-2 gap-2 items-center border-gray-500">
              <input type="checkbox" className="rounded-full" />
              <p>Same as shipping address</p>
            </div>
            <div className="flex border py-4 px-2 gap-2 items-center border-gray-500">
              <input type="checkbox" className="rounded-full" />
              <p>Use a different billing address</p>
            </div>

            <p className="text-center p-4 w-full bg-black text-white">
              Pay now
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-5 flex flex-col gap-5">
          <div className="flex gap-3 items-start">
            <img
              src="https://cdn.shopify.com/s/files/1/0839/4647/1697/files/DSC_1321copy_64x64.jpg?v=1711732690"
              alt=".."
              className="h-10"
            />
            <div>
              <p>Deetya Suit Set </p>
              <p>XS</p>
            </div>
            <p>₹5,899.00</p>
          </div>
          <div className="flex w-full gap-3 justify-between items-center">
            <input type="text" placeholder="Discount Code" className="w-full"/>
            <p className="border border-gray-500 p-2 bg-gray-300">Apply</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="text-[13px] font-blod">₹5,899.00</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="font-bold">FREE</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>INR ₹5,899.00</p>
            </div>
            <p className="text-[13px]">Including ₹899.84 in taxes</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
