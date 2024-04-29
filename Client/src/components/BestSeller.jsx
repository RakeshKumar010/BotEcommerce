import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const BestSeller = ({setDetailsPopup,setAddId}) => {
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
    <div className="md:p-10 p-0 mt-16">
      <div className="text-center py-5">
        <p className="font-semibold text-2xl">BEST SELLER</p>
        <p className="">Explore suit sets</p>
      </div>
      <div className="flex md:justify-between justify-center  flex-wrap gap-4 sm:px-10 lg:px-10">
        {data &&
          [...data].reverse().map((value) => {
            return <Card setDetailsPopup={setDetailsPopup} setAddId={setAddId}  value={value} />;
          })}
      </div>
      <div className="flex justify-center items-center my-10">
        <Link to={'/best-seller'} className="bg-uiColor p-2 text-white rounded-sm px-10 cursor-pointer">VIEW ALL PRODUCTS</Link>
      </div>
    </div>
  );
};
export default BestSeller;
