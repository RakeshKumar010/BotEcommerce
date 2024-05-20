import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const RecycleData = () => {
  const [data, setData] = useState();

  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch(
        "http://65.2.144.134:3000/product/recycle-bin"
      );
      result = await result.json();
      setData(result);
      console.log(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);

  return (
    <>
      <div className="absolute right-0 border-dotted border-black border-0 md:border-2 min-h-screen w-full lg:w-[82%] px-2">
        <div className="text-center py-5">
          <p className="font-bold text-3xl text-teal-400">Deleted Products</p>
          <div className="flex justify-end">
            <p className="bg-teal-400 text-white p-5 py-3 rounded-md mx-2 hover:scale-105 transition-all duration-200 hover:shadow-lg">
              Export to Excel
            </p>
          </div>
        </div>

        <table className="table-auto  ">
          <tr className=" bg-teal-400 text-white">
            <th>S.No.</th>
            <th>Image</th>
            <th>Points</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Fabric</th>
            <th>Pieces</th>
            <th>Dispatch Time</th>

            <th>Availability</th>
            <th>Selected Sizes</th>
            <th>Price</th>
            <th>Section</th>
            <th>Offer</th>
            <th>Actions</th>
          </tr>

          {data &&
            [...data].reverse().map((value,index) => {
              return (
                <ProductCard
                  recycle={true}
                  setPageLoad={setPageLoad}
                  value={value}
                  index={index+1}
                />
              );
            })}
        </table>
      </div>
    </>
  );
};

export default RecycleData;
