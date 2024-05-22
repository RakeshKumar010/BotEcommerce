import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

const Admins = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://13.201.55.203:3000/admins");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p className="text-3xl font-bold text-center my-10  text-teal-400">
        All Account
      </p>
      <table className="w-[90%]  mx-auto text-center shadow-lg ">
        <tr className=" border-2 bg-teal-400 text-white ">
          <th className="p-2">S.No.</th>
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

        {data && data.map(
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
                sAdmin
              },index) => {
                return (
                  <tr className="border-2 " key={index}>
                    <td className="p-2 border-r-2 ">{index+1}</td>
                    <td className="p-2 border-r-2  flex items-center gap-2 text-nowrap ">{name}{sAdmin=='1'?<MdStars className="text-xl text-yellow-300"/>:null}</td>
                    <td className="p-2 border-r-2 ">{email}</td>
                    <td className="p-2 border-r-2 ">{pass}</td>
                    <td className="p-2 border-r-2 ">{addProduct}</td>
                    <td className="p-2 border-r-2 ">{editProduct}</td>
                    <td className="p-2 border-r-2 ">{deleteProduct}</td>
                    <td className="p-2 border-r-2 ">{addCoupon}</td>
                    <td className="p-2 border-r-2 ">{editCoupon}</td>
                    <td className="p-2 border-r-2 ">{deleteCoupon}</td>
                    <td className="p-2 border-r-2 ">
                      <div className="flex justify-center items-center">
                      <Link to={_id}>
                        <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
                      </Link>
                      <CgRemove
                        onClick={async () => {
                          let result = await fetch(
                            `http://13.201.55.203:3000/admins/${_id}`,
                            {
                              method: "delete",
                              headers: { "content-type": "application/json" },
                            }
                          );
                          setPageLoad(result);
                        }}
                        className="text-2xl text-[#9b3d4e] hover:scale-110"
                      />
                      </div>
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
