import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import EditProduct from "./EditProduct";

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
    <>
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%] px-2">
      <div className="text-center py-5">
        <p className="font-bold text-3xl">All Products</p>
        <div className="flex justify-end">
          <p className="bg-[#3f83f8] text-white p-5 py-3 rounded-md mx-2 hover:shadow-lg">
            Export to Excel
          </p>
        </div>
      </div>

      <table className="table-auto w-full ">
        <tr>
          <th>Image</th>
          <th>Points</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Fabric</th>
          <th>Pieces</th>
          <th>Dispatch Time</th>
          
          <th>Availability</th>
          <th>Selected Sizes</th>
          <th>Price</th>
          <th>Section</th>
          <th>Offer</th>
          <th>Actions</th>
        </tr>

        {data &&
          [...data].reverse().map((value) => {
 
            return <ProductCard setPageLoad={setPageLoad} value={value} />;
          })}
      </table>
    </div>
    {/* <EditProduct/> */}
    </>
  );
};

export default Product;
