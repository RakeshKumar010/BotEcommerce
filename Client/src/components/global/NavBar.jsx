import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const navItems = [
  { to: "/", text: "HOME" },
  { to: "/new-arrivals", text: "NEW ARRIVALS" },
  { to: "/suit-sets", text: "SUIT SETS" },
  { to: "/celebrity-stylists", text: "CELEBRITY STYLISTS" },
  { to: "/best-seller", text: "BEST SELLER" },
  { to: "/lehenga-sets", text: "LEHENGA SETS" },
  { to: "/", text: "Sign In", className: "text-gray-400 md:hidden block" },
  { to: "/", text: "Register", className: "text-gray-400 md:hidden block" },
];
const NavBar = () => {
  const [navRes, setNavRes] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchData, setSearchData] = useState(false);
  const [logos, setLogos] = useState(false);

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/add-logo");
      result = await result.json();
      setLogos(result[result.length - 1].logo);
    };
    getFun();
  }, []);
  return (
    <div
      className="flex sticky top-0 z-10 right-0 left-0 items-center justify-between  md:py-2 p-5 sm:px-8 lg:px-16
     bg-white"
    >
      {searchData ? (
        <div className="absolute z-[51] top-0 bottom-0 right-0 left-0 bg-white">
          <div className="bg-white p-16">
            <div className=" flex justify-between text-gray-700 font-thin cursor-pointer">
              <p>WHAT ARE YOU LOOKING FOR?</p>
              <IoCloseOutline
                className="text-2xl text-gray-600"
                onClick={() => {
                  setSearchData(false);
                }}
              />
            </div>
            <div className="flex items-center justify-between text-2xl  border-b-[1px]">
              <input
                type="text"
                className=" placeholder:text-2xl border-0 focus:ring-0 focus:border-0 placeholder:text-uiColor px-0 w-full "
                placeholder="Search Products..."
              />
              <IoSearchOutline className="cursor-pointer" />
            </div>
          </div>
        </div>
      ) : null}
      <IoReorderThreeOutline
        className="cursor-pointer text-3xl md:hidden block"
        onClick={() => {
          setNavRes(!navRes);
        }}
      />
      <Link to={"/"}>
        {logos ? (
          <img
            src={`https://botecommerce.onrender.com/${logos}`}
            alt="..."
            className="h-8  lg:h-16"
          />
        ) : (
          <img
            src="https://bhaviniparis.com/cdn/shop/files/bhavini_paris_logo_file-01_360x.jpg?v=1702467865"
            alt="..."
            className="h-8  lg:h-16"
          />
        )}
      </Link>
      <div
        className={`md:sticky absolute  md:left-auto left-0 top-0 bottom-0 right-0 z-50 bg-black/20 ${
          navRes ? "flex" : "hidden md:block"
        } }`}
      >
        <ul
          className={`flex md:flex-row flex-col md:static h-screen bg-white sm:gap-4 gap-7 md:gap-5 lg:gap-4 p-8  md:h-auto  md:w-auto w-[80%] md:items-center text-nowrap `}
        >
          <div className="md:hidden flex justify-between items-center  py-2 px-1 w-full bg-gray-100">
            <input
              type="text"
              placeholder="Search Products.."
              className="w-[70%] border-0 bg-gray-100 px-2"
            />
            <IoSearchOutline className="text-xl" />
          </div>
          {navItems.map((item) => (
            <Link
              to={item.to}
              onClick={() => {
                setNavRes(!navRes);
              }}
              className={item.className || ""}
            >
              <li className="text-base hover:bg-[#ac384b] shadow-sm shadow-gray-600 px-3
               hover:text-white p-2 rounded-full hover:shadow-md hover:scale-105 transition-all duration-200 hover:shadow-gray-600
               sm:text-[12px] lg:text-base">
                {item.text}
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={() => {
            setNavRes(!navRes);
          }}
          className="  w-[20%] h-screen md:hidden block"
        ></div>
      </div>
      <div className="flex gap-6 relative select-none">
        <IoSearchOutline
          onClick={() => {
            setSearchData(true);
          }}
          className="text-2xl hidden md:block cursor-pointer"
        />
        <IoBagHandleOutline
          className="text-2xl cursor-pointer"
          onClick={() => {
            setShowCart(!showCart);
          }}
        />
        {showCart ? (
          <div className="absolute flex flex-col gap-5  top-11 z-50 p-5 shadow-lg shadow-black/30 rounded-md w-72 md:w-[350px] bg-white right-0">
            <p className="text-center text-gray-700 font-thin">
              No products in the cart.
            </p>
            <hr />
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">Rs. 0.00</p>
              </div>
              <p className="text-[12px] text-center text-gray-600 font-thin">
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <div>
              <p className="py-2 w-full text-white text-center bg-[#c97d8a] ">
                {" "}
                CHECK OUT
              </p>
              <p className="py-2 w-full text-[#c97d8a] text-center  ">
                {" "}
                Update Cart
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
