import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Card = ({ value }) => {
  const { _id, title, image, rating, price } = value;
  const [addStyle, setAddStyle] = useState(false);
  return (
    <div className=" md:w-80 w-40 bg-white border hover:border-gray-900 rounded-lg shadow  " >
      <Link to={"/" + _id} className="relative">
        <img
          className=" rounded-t-lg w-full"
          src={image}
          alt="product image"
          onMouseEnter={() => {
            setAddStyle(true);
          }}
          onMouseLeave={() => {
            setAddStyle(false);
          }}
        />
        <div
          onMouseEnter={() => {
            setAddStyle(true);
          }}
          className={`flex justify-center gap-5 items-center absolute right-0 left-0 transition-all   ${
            addStyle ? " z-0" : "-z-10"
          }`}
        >
          <div
            className={`w-10 text-white flex justify-center rounded-full transition-all  items-center relative  h-10 bg-uiColor bottom-16 `}
          >
            <IoMdEye />
          </div>
          <div
            className={`w-10 text-white flex justify-center rounded-full transition-all items-center h-10 relative  bg-uiColor bottom-16`}
          >
            <HiOutlineShoppingBag />
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5 text-center">
        <Link to={"/" + _id}>
          <h5 className="text-lg  tracking-tight text-[#ac384b] ">{title}</h5>
        </Link>

        <div className=" text-center">
          <span className="text-lg  text-gray-900 ">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
