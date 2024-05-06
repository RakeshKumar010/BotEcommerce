import React from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProductCard = ({ value, setPageLoad }) => {
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

  return (
    <tr className="text-center ">
      <td className="p-2 border w-48 flex justify-between flex-wrap gap-2 border-gray-500 ">
        {image.map((value) => {
          return (
            <img
              className=" w-10 h-10 rounded-sm object-cover md:w-20 md:h-20"
              src={`https://botecommerce.onrender.com/${value}`}
              alt="product image"
            />
          );
        })}
      </td>
      <td className="border border-gray-500 px-2 ">{points}</td>
      <td className="border border-gray-500 px-2 ">{title}</td>
      <td className="border border-gray-500 px-2 w-20">{rating}</td>
      <td className="border border-gray-500 px-2 ">{fabric}</td>
      <td className="border border-gray-500 px-2 w-20">{pieces}</td>
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
          <CgRemove onClick={deleteFun} />
          <Link to={_id}>
          <BiEdit className="ml-2" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;
