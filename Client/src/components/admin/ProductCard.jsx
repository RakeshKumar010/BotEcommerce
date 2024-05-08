import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProductCard = ({ value, setPageLoad,recycle }) => {
  const [recycleId,setRecycleId]=useState('1')
  const {
    _id,
    title,
    section,
    image,
    rating,
    price,
    offer,
    fabric,
    dispatchTime,
    pieces,
    availability,
    points,
    selectedSizes,
  } = value;

  const deleteFun = async () => {
    let result = await fetch(`https://botecommerce.onrender.com/${_id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    });
    setPageLoad(result);
  };
  const recycleBinFun = async () => {
    let result = await fetch(`https://botecommerce.onrender.com/product`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id,recycleId }),
    });
    setPageLoad(result);
   
  };

  return (
    <tr className="text-center ">
      <td className="p-2 border     border-gray-500 ">
        {image.length > 0 && (
          <img
            className="   rounded-sm object-cover   "
            src={`https://botecommerce.onrender.com/${image[image.length - 1]}`}
            alt="product image"
          />
        )}
      </td>
      <td className="border border-gray-500 px-2 ">{points}</td>
      <td className="border border-gray-500 px-2 ">{title}</td>
      <td className="border border-gray-500 px-2 ">{rating}</td>
      <td className="border border-gray-500 px-2 ">{fabric}</td>
      <td className="border border-gray-500 px-2 ">{pieces}</td>
      <td className="border border-gray-500 px-2 ">{dispatchTime}</td>
      <td className="border border-gray-500 px-2 ">{availability}</td>
      <td className="border border-gray-500 px-2 ">
        {selectedSizes.join(", ")}
      </td>
      <td className="border border-gray-500 px-2 ">₹{price}</td>
      <td className="border border-gray-500 px-2 ">{section}</td>
      <td className="border border-gray-500 px-2 ">{offer}</td>
      <td className="border border-gray-500 px-2 ">
        <div className="text-3xl flex cursor-pointer md:text-4xl">
          <CgRemove
            onClick={recycle?deleteFun:recycleBinFun}
            className="text-[#9d4253] hover:scale-110 transition-all duration-200"
          />
          <Link to={_id}>
            <BiEdit className="ml-2 hover:scale-110 transition-all duration-200 text-teal-400" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;
