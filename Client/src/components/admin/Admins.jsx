import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

const Admins = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/admins");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p className="text-3xl font-bold text-center my-10 text-[#9b3d4e]">
        All Coupon
      </p>
      <table className="w-[90%] mx-auto text-center shadow-lg ">
        <tr className="border-2 bg-teal-400 text-white ">
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Passwod</th>
          <th className="p-2">Add Product</th>
          <th className="p-2">Edit Product</th>
          <th className="p-2">Delete Product</th>
          <th className="p-2">Add Coupon</th>
          <th className="p-2">Edit Coupon</th>
          <th className="p-2">Delete Coupon</th>
          <th className="p-2">Action</th>
        </tr>

        {data &&
          [...data]
            .reverse()
            .map(
              ({
                _id,
                name,
                email,
                pass,
                addProduct,
                editProduct,
                deleteProduct,
                addCoupon,
                editCoupon,
                deleteCoupon,
              }) => {
                return (
                  <tr className="border-2">
                    <td className=" p-2">{name}</td>
                    <td className=" p-2">{email}</td>
                    <td className=" p-2">{pass}</td>
                    <td className=" p-2">{addProduct}</td>
                    <td className=" p-2">{editProduct}</td>
                    <td className=" p-2">{deleteProduct}</td>
                    <td className=" p-2">{addCoupon}</td>
                    <td className=" p-2">{editCoupon}</td>
                    <td className=" p-2">{deleteCoupon}</td>
                    <td className="flex gap-2 justify-center p-2">
                      <Link to={_id}>
                        <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
                      </Link>
                      <CgRemove
                        onClick={async () => {
                          let result = await fetch(
                            `https://botecommerce.onrender.com/admins/${_id}`,
                            {
                              method: "delete",
                              headers: { "content-type": "application/json" },
                            }
                          );
                          setPageLoad(result);
                        }}
                        className="text-2xl text-[#9b3d4e] hover:scale-110"
                      />
                    </td>
                  </tr>
                );
              }
            )}
      </table>
    </div>
  );
};

export default Admins;
