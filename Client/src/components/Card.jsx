import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2"; 

const Card = ({ value, setDetailsPopup, setAddId }) => {
  const { _id, title, image, rating, price } = value; 
  
  const [addStyle, setAddStyle] = useState(false);
 
  return (
    <div className="hover:scale-105 transition-all duration-200 w-[43vw] sm:w-[28vw] md:w-[19vw] lg:[20vw]  xl:w-[20vw] bg-white border hover:border-gray-900 rounded-lg shadow  ">
      <p className="relative">
        <Link to={"/product/" + _id}>
          {image && (
            <img
              className="rounded-t-lg  w-full"
              src={image[0]}
              alt="product image"
              onMouseEnter={() => {
                setAddStyle(true);
              }}
              onMouseLeave={() => {
                setAddStyle(false);
              }}
            />
          )}
        </Link>
        <div
          onMouseEnter={() => {
            setAddStyle(true);
          }}
          className={`flex justify-center gap-5 items-center absolute right-0 left-0 transition-all   ${
            addStyle ? " z-0" : "-z-10"
          }`}
        >
          <div
            onClick={() => {
              setAddId(_id); 
              setDetailsPopup(true);
            }}
         style={{ backgroundColor: 'black' }}
            className={`w-10 cursor-pointer text-white flex justify-center rounded-full transition-all  items-center relative  h-10   bottom-16 `}
          >
            <IoMdEye className="" />
          </div>
          <Link
            to={"/product/" + _id}
         style={{ backgroundColor: 'black' }}
            className={`w-10 text-white flex justify-center rounded-full transition-all items-center h-10 relative   bottom-16`}
          >
            <HiOutlineShoppingBag />
          </Link>
        </div>
      </p>
      <div className="px-5  py-2 text-center">
        <Link to={"/product/" + _id}>
          <h5 style={{
            color:'black'
          }} className={`xl:text-lg md:text-base sm:text-[15px]   tracking-tight  `}>{title}</h5>
        </Link>
        <div className="flex items-center justify-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className=" lg:w-4 lg:h-4 w-3 h-3 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className=" lg:w-4 lg:h-4 w-3 h-3 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className=" lg:w-4 lg:h-4 w-3 h-3 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className=" lg:w-4 lg:h-4 w-3 h-3 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className=" lg:w-4 lg:h-4 w-3 h-3 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
            {rating}
          </span>
        </div>
        <div className="text-center">
          <span className="text-lg  text-gray-900 ">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
