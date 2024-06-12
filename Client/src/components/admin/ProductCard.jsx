import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { MdRestorePage } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ value, index, setPageLoad, recycle }) => {
  const [access, setAccess] = useState("");

  const recycleId = "";
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
    let result = await fetch(`https://psyrealestate.in/${_id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    });
    setPageLoad(result);
  };
  const recycleBinFun = async () => {
    let result = await fetch(
      `https://psyrealestate.in/recycle/${_id}`,
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ recycleId: "1" }),
      }
    );
    if (result.ok) {
      setPageLoad(result);
      Swal.fire({
        title: "Success",
        text: "Product Deleted successfully!",
        icon: "success",
        confirmButtonColor:"#16bdca"
      });
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };
  const restoreFun = async () => {
    let result = await fetch(
      `https://psyrealestate.in/restore/${_id}`,
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ recycleId: "0" }),
      }
    );
    if (result.ok) {
      setPageLoad(result);
      Swal.fire({
        title: "Success",
        text: "Product Restore successfully!",
        icon: "success",
        confirmButtonColor:"#16bdca"

      });
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };
  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/admins");
      result = await result.json();
      let userString = localStorage.getItem('user');
      let user = JSON.parse(userString);
      result.map((value) => {
        if (value.email == user.email) {
          setAccess(value);
         
        }
      });
    };
    getFun();
  }, []);

  return (
    <tr className="text-center " key={index}>
      <td className="border border-gray-500 px-2 ">{index}</td>

      <td className="p-2 border     border-gray-500 ">
        {image.length > 0 && (
          <img
            className="   rounded-sm object-cover   "
            src={`https://psyrealestate.in/${image[image.length - 1]}`}
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
        <div className="text-3xl flex gap-2 cursor-pointer md:text-4xl">
          {access.deleteProduct == "yes" ? (
            <CgRemove
              onClick={recycle ? deleteFun : recycleBinFun}
              className="text-red-600 hover:scale-110 transition-all duration-200"
            />
          ) : null}
          {recycle ? (
            <MdRestorePage
              onClick={restoreFun}
              className="text-green-400 hover:scale-110 transition-all duration-200"
            />
          ) : null}
          {access.editProduct == "yes" ? (
            <Link to={_id}>
              <BiEdit className="hover:scale-110 transition-all duration-200 text-teal-400" />
            </Link>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;
