import React, { useState } from "react";
import { Link, useFetcher } from "react-router-dom";

const MiniCard = ({ value }) => {
  const { _id, title, image} = value;
  
  return (
    <div className=" md:w-48 w-20 bg-white border hover:border-gray-900 rounded-lg shadow  ">
      <Link to={"/" + _id} className="relative">
        {image && (
          <img
            className=" rounded-t-lg w-full"
            src={`https://botecommerce.onrender.com/${image[3]}`}
            alt="product image"
            
          />
        )}

        
      </Link>
      <div className="py-2 md:py-5  text-center">
        <Link to={"/" + _id}>
          <h5 className="text-[12px]  md:text-lg  tracking-tight text-[#ac384b] ">
            {title}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default MiniCard;
