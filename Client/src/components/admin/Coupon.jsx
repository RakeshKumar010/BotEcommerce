import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

const Coupon = () => {
  const [data, setData] = useState();
  const [access, setAccess] = useState("");
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/coupon");
      result = await result.json();
      let result2 = await fetch("https://botecommerce.onrender.com/admins");
      result2 = await result2.json();
      result2.map((value) => {
        if (value.email == localStorage.getItem("email")) {
          setAccess(value);
          console.log(value);
        }
      });
      setData(result);
      setPageLoad(result);
    };

    getFun();
  }, [pageLoad]);

  useEffect(() => {}, []);
  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p className="text-3xl font-bold text-center my-10 text-teal-400">
        All Coupon
      </p>
      <table className="w-[90%] mx-auto text-center shadow-lg ">
        <tr className="border-2 bg-teal-400 text-white ">
          <th className="p-2">Title</th>
          <th className="p-2">Discount</th>
          <th className="p-2">Code</th>
          <th className="p-2">Expiry Date</th>
          <th className="p-2">Action</th>
        </tr>

        {data &&
          [...data]
            .reverse()
            .map(({ _id, title, discount, code, expiryDate }) => {
              return (
                <tr className="border-2">
                  <td className=" p-2">{title}</td>
                  <td className=" p-2">{discount}</td>
                  <td className=" p-2">{code}</td>
                  <td className=" p-2">{expiryDate}</td>
                  <td className="flex gap-2 justify-center p-2">
                    {access.editCoupon == "yes" ? (
                      <Link to={_id}>
                        <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
                      </Link>
                    ) : null}
                    {access.deleteCoupon == "yes" ? (
                      <CgRemove
                        onClick={async () => {
                          let result = await fetch(
                            `https://botecommerce.onrender.com/coupon/${_id}`,
                            {
                              method: "delete",
                              headers: { "content-type": "application/json" },
                            }
                          );
                          setPageLoad(result);
                        }}
                        className="text-2xl text-[#9b3d4e] hover:scale-110"
                      />
                    ) : null}
                  </td>
                </tr>
              );
            })}
      </table>
    </div>
  );
};

export default Coupon;
