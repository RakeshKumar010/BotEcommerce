import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

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
      </div>
      <div className="flex md:justify-between justify-center  flex-wrap gap-4 gap-y-7 sm:px-10 lg:px-10">
        {data &&
          [...data].reverse().map((value) => {
            return <Card value={value} setAddId={setAddId}  setDetailsPopup={setDetailsPopup}/>;
          })}
      </div>
      <div className="flex justify-center items-center my-10">
        <Link to={'/new-arrivals'} className="bg-uiColor p-2 text-white rounded-sm px-10 cursor-pointer">VIEW ALL PRODUCTS</Link>
      </div>
    </div>
  );
};

export default ArrivalShow;
