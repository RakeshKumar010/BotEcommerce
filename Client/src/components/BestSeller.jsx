import React, { useEffect, useState } from "react";
import Card from "./Card";

const BestSeller = () => {
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
    <div className="p-10 mt-16">
      <div className="text-center py-5">
        <p className="font-semibold text-2xl">BEST SELLER</p>
        <p className="">Explore suit sets</p>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {data &&
          [...data].reverse().map((value) => {
            return <Card value={value} />;
          })}
      </div>
      <div className="flex justify-center items-center my-10">
        <p className="bg-uiColor p-2 text-white rounded-sm px-10 cursor-pointer">VIEW ALL PRODUCTS</p>
      </div>
    </div>
  );
};
export default BestSeller;
