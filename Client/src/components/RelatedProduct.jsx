import React, { useEffect, useState } from "react";
import MiniCard from "./MiniCard";

const RelatedProduct = () => {
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
    <div className=" px-5">
      <p className="font-semibold text-2xl text-center my-6 mt-10 md:my-10 md:mt-40">
        You May Also Like
      </p>
      <div className="flex justify-center md:flex-nowrap flex-wrap gap-5 ">
        {data &&
          data.slice(0, 6).map((value, index) => {
            return <MiniCard value={value} key={index} />;
          })}
      </div>
    </div>
  );
};

export default RelatedProduct;
