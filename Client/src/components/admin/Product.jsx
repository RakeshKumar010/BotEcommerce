import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);
  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-[82%]">
      <div className="text-center py-5">
        <p className="font-bold text-3xl">All Products</p>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {data &&
          [...data].reverse().map((value) => {
            return <ProductCard setPageLoad={setPageLoad} value={value} />;
          })}
      </div>
    </div>
  );
};

export default Product;
