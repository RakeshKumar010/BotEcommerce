import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CgRemove } from "react-icons/cg";

const Coupon = () => {
  const [data, setData] = useState();

  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://localhost:3000/coupon");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="bg-gray-50 border-2 border-dotted border-black h-screen w-full md:w-[83%] absolute right-0 ">
      <p className="text-3xl font-bold text-center my-10">All Coupon</p>
      <div className="flex w-full     flex-wrap text-center justify-center ">
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
                        `http://localhost:3000/coupon/${_id}`,
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
      </div>
    </div>
  );
};

export default Coupon;
