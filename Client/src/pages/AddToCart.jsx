import React, { useEffect, useState } from "react";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";
import CartCard from "../components/CartCard";
import { FaChevronRight } from "react-icons/fa6";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";
import { ApiColor } from "../components/api/data";

const AddToCart = () => {
  const [localData, setLocalData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const storedObject = JSON.parse(localStorage.getItem("myCart"));
    if (storedObject) {
      setLocalData(storedObject);
      const total = storedObject.reduce((total, item) => {
        return total + item.currentPrice * item.number;
      }, 0);

      setTotalPrice(total.toFixed(1));
    }
  }, []);
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <section className="md:py-24 py-12 relative bg-gray-100">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 style={{color:ApiColor}} className="title font-manrope font-bold text-3xl md:text-4xl leading-10 mb-8 text-center  ">
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
            localData.map((value, index) => {
              return (
                <>
                  <CartCard key={index} value={value} />
                </>
              );
            })}
          <div className=" bg-white shadow-lg rounded-lg   p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ₹{totalPrice}
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Delivery Charge
              </p>
              <h6 className="font-bold text-xl leading-8 text-green-500 ">
                Free
              </h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 style={{color:ApiColor}} className="font-manrope font-medium text-2xl leading-9 ">
                ₹{totalPrice}
              </h6>
            </div>
          </div>
          <div className="flex md:static fixed bottom-0 right-0 left-0 md:bg-transparent bg-white p-3 items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link style={{backgroundColor:ApiColor}} to={'cart-order'} className={`md:rounded-full rounded-lg w-full  md:max-w-[280px] py-2 md:py-4 text-center justify-center items-center  font-semibold text-lg text-white flex gap-2 transition-all duration-500 hover:scale-105 hover:shadow-lg   `}>
              Continue to Payment
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddToCart;
