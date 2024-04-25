import React, { useEffect, useState } from "react";
import Card from "./Card";

const ShowCatg = () => {
  const [ data, setData ] = useState();
  

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      setData(result);
      console.log(result);
    };
    getFun();
  }, []);

  return (
    <div className="p-10">
      <div className="text-center py-5">
        <p className="font-bold">NEW ARRIVALS</p>
        <p className="">
          Sustain your wardrobe with our best selling products.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
      {data && [...data].reverse().map((value) => {
    return <Card value={value} />;
  })}
      </div>
    </div>
  );
};

export default ShowCatg;
