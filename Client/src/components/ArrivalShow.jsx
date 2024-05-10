import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const ArrivalShow = ({setDetailsPopup,setAddId}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/product");
      result = await result.json();
      setData(result);
    };
    getFun();
  }, []);

  return (
    <div className="md:p-10 p-0 ">
      <div className="text-center py-5 flex flex-col justify-center items-center ">
        <Link to={'/new-arrivals'} className="font-semibold text-lg md:text-2xl">NEW ARRIVALS</Link>
        <p className="">
          Sustain your wardrobe with our best selling products.
        </p>
        <div className="flex items-center my-5 justify-center ">
          <Link to={'/new-arrivals'} className="flex items-center bg-[#ac384b] text-white p-2 md:w-[40vw] w-[60vw]  justify-center rounded-full hover:scale-105 hover:shadow-sm hover:shadow-gray-600 transition-all duration-200">
            <MdAddShoppingCart />
            <p>Store</p>
          </Link>
        </div>
      </div>
      <div className="flex md:justify-between justify-center  flex-wrap gap-4 gap-y-7 sm:px-10 lg:px-10">
        {data &&
          [...data].reverse().map((value,index) => {
            return <Card value={value} key={index} setAddId={setAddId}  setDetailsPopup={setDetailsPopup}/>;
          })}
      </div>
    
    </div>
  );
};

export default ArrivalShow;
