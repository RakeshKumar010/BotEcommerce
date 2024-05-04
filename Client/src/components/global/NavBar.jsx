import React, { useState } from "react";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [navRes, setNavRes] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchData, setSearchData] = useState(false);
  return (
    <div className="flex sticky top-0 z-10 right-0 left-0 items-center justify-between  lg:py-2 p-5 lg:px-16 bg-white">
      {searchData ? (
        <div className="absolute z-[51] top-0 bottom-0 right-0 left-0 bg-black/30">
          <div className="bg-white/20 p-16">
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
        className="cursor-pointer text-3xl lg:hidden block"
        onClick={() => {
          setNavRes(!navRes);
        }}
      />
      <Link to={"/"}>
        <img
          src="https://bhaviniparis.com/cdn/shop/files/bhavini_paris_logo_file-01_360x.jpg?v=1702467865"
          alt="..."
          className="h-8 lg:h-16"
        />
      </Link>
      <div
        className={`lg:sticky absolute  lg:left-auto left-0 top-0 bottom-0 right-0 z-50 bg-black/20 ${
          navRes ? "flex" : "hidden lg:block"
        } }`}
      >
        <ul
          className={`flex lg:flex-row flex-col lg:static h-screen bg-white  gap-7 p-8  lg:h-auto  lg:w-auto w-[80%] lg:items-center text-nowrap `}
        >
          <div className="lg:hidden flex justify-between items-center  py-2 px-1 w-full bg-gray-100">
            <input
              type="text"
              placeholder="Search Products.."
              className="w-[70%] border-0 bg-gray-100 px-2"
            />
            <IoSearchOutline className="text-xl" />
          </div>
          <Link
            to={"/"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>HOME</li>
          </Link>
          <Link
            to={"/new-arrivals"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>NEW ARRIVALS</li>
          </Link>
          <Link
            to={"/suit-sets"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>SUIT SETS</li>
          </Link>
          <Link
            to={"/celebrity-stylists"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>CELEBRITY STYLISTS</li>
          </Link>
          <Link
            to={"/best-seller"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>BEST SELLER</li>
          </Link>
          <Link
            to={"/lehenga-sets"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className=""
          >
            <li>LEHENGA SETS</li>
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className="text-gray-400 md:hidden block "
          >
            <li>Sign In</li>
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              setNavRes(!navRes);
            }}
            className="text-gray-400 md:hidden block "
          >
            <li>Register</li>
          </Link>
        </ul>
        <div   onClick={() => {
              setNavRes(!navRes);
            }} className="  w-[20%] h-screen lg:hidden block"></div>
      </div>
      <div className="flex gap-6 relative select-none">
        <IoSearchOutline
          onClick={() => {
            setSearchData(true);
          }}
          className="text-2xl hidden lg:block cursor-pointer"
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
