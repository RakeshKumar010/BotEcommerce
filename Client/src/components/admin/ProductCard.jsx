import React from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";

const ProductCard = ({ value, setPageLoad }) => {
  const {
    _id,
    title,
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

  return (
    <tr className="text-center">
      <td className="flex border border-gray-500 justify-center"><img className="rounded-t-lg w-10 h-10 object-cover md:w-20 md:h-20" src={image} alt="product image" /></td>
      <td className="border border-gray-500">{title}</td>
      <td className="border border-gray-500">{rating}</td>
      <td className="border border-gray-500">{fabric}</td>
      <td className="border border-gray-500">{dispatchTime}</td>
      <td className="border border-gray-500">{pieces}</td>
      <td className="border border-gray-500">{availability}</td>
      <td className="border border-gray-500">{selectedSizes.join(", ")}</td>
      <td className="border border-gray-500">₹{price}</td>
      <td className="border border-gray-500">{points}</td>
      <td className="border border-gray-500">{offer}</td>
      <td className="border border-gray-500">
        <div className="text-3xl flex cursor-pointer md:text-4xl">
          <CgRemove onClick={deleteFun} />
          <BiEdit className="ml-2" />
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;
