import React, { useState } from "react";

const FilterSide = ({setFilterOpen}) => {
  const [intRate, setIntRate] = useState(7);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-50 flex">
      <div className="w-96  bg-white h-full p-10">
        <p className="text-uiColor text-lg">PRICE RANGE</p>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-end">Under {intRate * 500}₹</p>
            <input
              type="range"
              value={intRate}
              onChange={(e) => {
                setIntRate(e.target.value);
              }}
              className="w-full accent-uiColor  "
            />
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-uiColor text-lg">COLOR</p>
            <div className="flex items-center gap-5">
              <div className="h-6 w-6 rounded-full border border-black bg-blue-500"></div>
              <div className="h-6 w-6 rounded-full border border-black bg-yellow-500"></div>
              <div className="h-6 w-6 rounded-full border border-black bg-lime-600"></div>
              <div className="h-6 w-6 rounded-full border border-black bg-green-600"></div>
              <div className="h-6 w-6 rounded-full border border-black bg-pink-600"></div>
              <div className="h-6 w-6 rounded-full border border-black bg-orange-600"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-uiColor text-lg">SIZE</p>
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="size" />
                <p>XS</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="size" />
                <p>S</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="size" />
                <p>M</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="size" />
                <p>L</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="size" />
                <p>XL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full" onClick={()=>{
        setFilterOpen(false)
      }}>
        
      </div>
    </div>
  );
};

export default FilterSide;
