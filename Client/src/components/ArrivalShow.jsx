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
        <Link to={'/new-arrivals'} className="font-semibold text-2xl px-5 border-2 p-3 rounded-full border-uiColor">NEW ARRIVALS</Link>
        <p className="">
          Sustain your wardrobe with our best selling products.
        </p>
      </div>
      <div className="flex md:justify-between justify-center  flex-wrap gap-4 sm:px-10 lg:px-10">
        {data &&
          [...data].reverse().map((value) => {
            return <Card value={value} setAddId={setAddId}  setDetailsPopup={setDetailsPopup}/>;
          })}
      </div>
    </div>
  );
};

export default ArrivalShow;
