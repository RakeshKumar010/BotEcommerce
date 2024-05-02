import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [data, setData] = useState();
  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/product");
      result = await result.json();
      setData(result);
      setPageLoad(result);
    };
    getFun();
  }, [pageLoad]);

  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full md:w-[82%]">
      <div className="text-center py-5">
        <p className="font-bold text-3xl">All Products</p>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Fabric</th>
            <th>Dispatch Time</th>
            <th>Pieces</th>
            <th>Availability</th>
            <th>Selected Sizes</th>
           
            <th>Price</th>
            <th>Points</th>
            <th>Offer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            [...data].reverse().map((value) => {
              return <ProductCard setPageLoad={setPageLoad} value={value} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
