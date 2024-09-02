import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as XLSX from "xlsx";
import { ApiColor } from "../api/data";
const Product = () => {
  const [data, setData] = useState();

  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);
      let result = await fetch("http://localhost:4001/product");
      result = await result.json();
      let filteredResults = result.filter(
        (value) => value.clientId == user._id
      );
      setData(filteredResults);
    };
    getFun();
  }, [pageLoad]);

  const downloadExcal = () => {
    // Convert the result to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Products");
    // Write the workbook to a file
    XLSX.writeFile(wb, "ProductsData.xlsx");
  };
  return (
    <>
      <div className="absolute right-0 border-dotted border-black border-0 md:border-2 min-h-screen w-full lg:w-[82%] px-2">
        <div className="text-center py-5">
          <p className="font-bold text-3xl " style={ApiColor?{ color: ApiColor }:{ color: 'black'}}>
            All Products
          </p>
          <div className="flex justify-end">
            <p
              onClick={downloadExcal}
              style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black' }}
              className="cursor-pointer text-white p-5 py-3 rounded-md mx-2 hover:scale-105 transition-all duration-200 hover:shadow-lg"
            >
              Export to Excel
            </p>
          </div>
        </div>

        <table className="table-auto  w-full shadow-lg  ">
          <tr  style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black' }} className="  text-white">
            <th>S.No.</th>
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

          {data && data.length > 0 ? (
            [...data]
              .reverse()
              .map((value, index) => (
                <ProductCard
                  key={index}
                  index={index + 1}
                  recycle={false}
                  setPageLoad={setPageLoad}
                  value={value}
                />
              ))
          ) : (
            <tr className="text-center w-full">
              <td className="font-semibold" colSpan={14}>
                Data not found
              </td>
            </tr>
          )}
        </table>
      </div>
      {/* <EditProduct/> */}
    </>
  );
};

export default Product;
