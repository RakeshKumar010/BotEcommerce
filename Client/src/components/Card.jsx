import React from "react";
import { Link } from "react-router-dom";

const Card = ({ value }) => {
  const { _id, title, image, rating, price } = value;
  return (
    <div className=" w-80 bg-white border hover:border-gray-900 rounded-lg shadow  ">
      <Link to={"/" + _id}>
        <img className=" rounded-t-lg w-full" src={image} alt="product image" />
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
