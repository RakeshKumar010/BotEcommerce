import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as XLSX from 'xlsx';
import { ApiColor } from "../api/data";

const RecycleData = () => {
  const [data, setData] = useState();

  const [pageLoad, setPageLoad] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch(
        "https://psyrealestate.in/product/recycle-bin"
      );
      result = await result.json();
      setData(result);
      console.log(result);
      
    };
    getFun();
  }, [pageLoad]);
  const downloadExcal =()=>{
    // Convert the result to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Products");
    // Write the workbook to a file
    XLSX.writeFile(wb, "ProductsData.xlsx");
   }
  return (
    <>
      <div className="absolute right-0 border-dotted border-black border-0 md:border-2 min-h-screen w-full lg:w-[82%] px-2">
        <div className="text-center py-5">
          <p className="font-bold text-3xl " style={{color:ApiColor}}>Deleted Products</p>
          <div className="flex justify-end">
          <p onClick={downloadExcal}      style={{backgroundColor:ApiColor}} className=" cursor-pointer text-white p-5 py-3 rounded-md mx-2 hover:scale-105 transition-all duration-200 hover:shadow-lg">
            Export to Excel
          </p>
          </div>
        </div>

        <table className="table-auto  ">
          <tr      style={{backgroundColor:ApiColor}} className=" text-white">
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

          {data &&
            [...data].reverse().map((value,index) => {
              return (
                <ProductCard
                  recycle={true}
                  setPageLoad={setPageLoad}
                  value={value}
                  
                  index={index+1}
                />
              );
            })}
        </table>
      </div>
    </>
  );
};

export default RecycleData;
