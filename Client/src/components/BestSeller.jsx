import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const BestSeller = ({ setDetailsPopup, setAddId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/product");
      result = await result.json();
      let array = [];
      result.map((value) => {
        console.log(value.section);
        if ("Best-Seller" == value.section) {
          array.push(value);
        }
        setData(array);
      });
    };
    getFun();
  }, []);

  return (
    <div className="md:p-10 p-0 mt-16">
      <div className="text-center py-5">
        <Link to={'/best-seller'}  className="font-semibold text-lg md:text-2xl">BEST SELLER</Link>
        <p className="">Explore suit sets</p>
        <div className="flex items-center my-5 justify-center ">
          <Link to={'/best-seller'} className="flex items-center bg-[#ac384b] text-white p-2 md:w-[40vw] w-[60vw]  justify-center rounded-full hover:scale-105 hover:shadow-sm hover:shadow-gray-600 transition-all duration-200">
            <MdAddShoppingCart />
            <p>Store</p>
          </Link>
        </div>
      </div>
      <div className="flex   justify-center  flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
        {data &&
          [...data].reverse().map((value) => {
            return (
              <Card
                setDetailsPopup={setDetailsPopup}
                setAddId={setAddId}
                value={value}
              />
            );
          })}
      </div>
    </div>
  );
};
export default BestSeller;
