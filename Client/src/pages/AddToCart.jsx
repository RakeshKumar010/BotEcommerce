import React, { useEffect, useState } from "react";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import CartCard from "../components/CartCard";
import { FaChevronRight } from "react-icons/fa6";

const AddToCart = () => {
  const [localData, setLocalData] = useState();

  useEffect(() => {
    const storedObject = JSON.parse(localStorage.getItem("myCart"));
    console.log(storedObject);
    setLocalData(storedObject);
  }, []);
  return (
    <>
      <HeaderTop />
      <NavBar />
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">
                Delivery Charge
              </span>
              <span className="w-full max-w-[260px] text-center">Quantity</span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>
          {localData &&
            localData.map((value,index) => {
              return (
                <>
                  <CartCard key={index} value={value}/>
                </>
              );
            })}
             <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
        <div className="flex items-center justify-between w-full mb-6">
          <p className="font-normal text-xl leading-8 text-gray-400">
            Sub Total
          </p>
          <h6 className="font-semibold text-xl leading-8 text-gray-900">
            $360.00
          </h6>
        </div>
        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
          <p className="font-normal text-xl leading-8 text-gray-400">
            Delivery Charge
          </p>
          <h6 className="font-semibold text-xl leading-8 text-gray-900">
            $45.00
          </h6>
        </div>
        <div className="flex items-center justify-between w-full py-6">
          <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
            Total
          </p>
          <h6 className="font-manrope font-medium text-2xl leading-9 text-[#ac384b]">
            $405.00
          </h6>
        </div>
      </div>
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full py-4 w-full max-w-[280px]  hover:scale-105 hover:shadow-md hover:shadow-gray-600   flex items-center bg-[#ac384b]/10 justify-center transition-all duration-500 ">
              <span className="px-2 font-semibold text-lg leading-8 text-[#ac384b]">
                Add Coupon Code
              </span>
             <FaChevronRight className="text-[#ac384b]"/>
            </button>
            <button className="rounded-full w-full  max-w-[280px] py-4 text-center justify-center items-center bg-[#ac384b] font-semibold text-lg text-white flex gap-2 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-gray-600  ">
              Continue to Payment
              <FaChevronRight/>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
