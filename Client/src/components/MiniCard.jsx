import React from "react";
import { Link } from "react-router-dom";
import { ApiColor } from "./api/data";

const MiniCard = ({ value }) => {
  const { _id, title, image, rating,price } = value;
  const ratingNumber = parseInt(rating);
  return (
    <div   className=" bg-white border w-full md:w-80 hover:border-gray-900 rounded-lg shadow  ">
      <Link to={"/" + _id} className="">
        {image && (
          <img
            className=" rounded-t-lg w-full"
            src={`https://psyrealestate.in/${image[3]}`}
            alt="product image"
          />
        )}
      </Link>
      <div className="py-4 px-6 text-center">
        <Link to={"/" + _id}>
          <h5 style={{color:ApiColor}} className="text-lg  font-semibold">{title}</h5>
          <div className="flex justify-center items-center mt-2 mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(ratingNumber)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                {rating}
              </span>
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold">₹{price}</div>
        </Link>
      </div>
    </div>
  );
};

export default MiniCard;
