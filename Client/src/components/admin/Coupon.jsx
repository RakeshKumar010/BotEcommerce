import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

const Coupon = () => {
  const [data, setData] = useState();

  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/coupon");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="bg-gray-50 border-0 md:border-2 border-dotted border-black h-screen w-full lg:w-[83%] absolute right-0 ">
      <p className="text-3xl font-bold text-center my-10 text-[#9b3d4e]" >All Coupon</p>
      <table className="w-[90%] mx-auto text-center shadow-lg ">
        <tr className="border-2 bg-teal-400 text-white ">
          <th className="p-2">Title</th>
          <th className="p-2">Discount</th>
          <th className="p-2">Code</th>
          <th className="p-2">Expiry Date</th>
          <th className="p-2">Action</th>
        </tr>
  
          {data &&
            [...data].reverse().map(({_id,title,discount,code,expiryDate}) => {
              return <tr className="border-2">
              <td className=" p-2">{title}</td>
              <td className=" p-2">{discount}</td>
              <td className=" p-2">{code}</td>
              <td className=" p-2">{expiryDate}</td>
              <td className="flex gap-2 justify-center p-2">
              <Link to={_id}>
              <BiEdit className="text-2xl text-teal-400 hover:scale-110" />
              </Link>
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
              </td>
              </tr>
            })}
   
      </table>
      {/* <div className="flex w-full     flex-wrap text-center justify-center ">
        <div className="border border-r-0 border-black ">
          <p className="font-bold bg-gray-200 p-3">Title</p>
          {data &&
            [...data].reverse().map(({ title }) => {
              return (
                <div className="flex flex-col gap-5 p-3">
                  <p>{title}</p>
                </div>
              );
            })}
        </div>
        <div className="border sm:border-r-0 border-black ">
          <p className="font-bold bg-gray-200 p-3">Discount</p>
          {data &&
            [...data].reverse().map(({ discount }) => {
              return (
                <div className="flex flex-col gap-5 p-3">
                  <p>{discount}%</p>
                </div>
              );
            })}
        </div>
        <div className="border border-r-0 border-black ">
          <p className="font-bold bg-gray-200 p-3">Code</p>
          {data &&
            [...data].reverse().map(({ code }) => {
              return (
                <div className="flex flex-col gap-5 p-3">
                  <p>{code}</p>
                </div>
              );
            })}
        </div>
        <div className="border border-r-0 border-black ">
          <p className="font-bold bg-gray-200 p-3">Expiry Date</p>
          {data &&
            [...data].reverse().map(({ expiryDate }) => {
              return (
                <div className="flex flex-col gap-5 p-3">
                  <p>{expiryDate}</p>
                </div>
              );
            })}
        </div>
        <div className="border  border-black ">
          <p className="font-bold bg-gray-200 p-3">Action</p>
          {data &&
            [...data].reverse().map(({ _id }) => {
              return (
                <div className="flex items-center py-4  gap-5 p-3  ">
                  <BiEdit className="text-lg" />
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
                    className="text-lg"
                  />
                </div>
              );
            })}
        </div>
      </div> */}
    </div>
  );
};

export default Coupon;
