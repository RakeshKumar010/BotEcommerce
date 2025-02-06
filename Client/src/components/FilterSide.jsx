import React from "react";
import { ApiColor } from "./api/data";

const FilterSide = ({
  setFilterOpen,
  intRate,
  setIntRate,
  isAvailability,
  setIsAvailability,
  selectedFabric,
  setSelectedFabric,
  selectedSize,
  setSelectedSize,
}) => {
  // Default size

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    // console.log(event.target.value);
  };

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  // Handle checkbox changes
  const handleRadioChange = (fabricName) => {
    setSelectedFabric(fabricName);
  };

  return (
    <div className="fixed  top-0 bottom-0 left-0 right-0 bg-black/50 z-50 flex">
      <div className="w-96  bg-white h-full p-10">
        <p style={{ color: ApiColor }} className=" text-lg">
          PRICE RANGE
        </p>
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-end">Under {intRate * 500}₹</p>
            <input
              type="range"
              value={intRate}
              onChange={(e) => {
                setIntRate(e.target.value);
              }}
              className={`w-full accent-[${ApiColor}]  `}
            />
          </div>

          <div className="flex flex-col gap-5">
            <p style={{ color: ApiColor }} className=" text-lg">
              Availability
            </p>
            <div className="mt-2 flex  justify-start items-start flex-wrap">
              <label>
                <input
                  type="radio"
                  value="Available"
                  checked={isAvailability === "Available"}
                  onChange={(e) => setIsAvailability(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Available</span>
              </label>
              <label className="ml-6">
                <input
                  type="radio"
                  value="Unavailable"
                  checked={isAvailability === "Unavailable"}
                  onChange={(e) => setIsAvailability(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Unavailable</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p style={{ color: ApiColor }} className="text-lg">
              Fabric
            </p>
            <div className="flex justify-start items-start flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="rounded-full"
                  name="fabric"
                  value="Georgette"
                  checked={selectedFabric === "Georgette"}
                  onChange={() => handleRadioChange("Georgette")}
                />
                <p>Georgette</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="rounded-full"
                  name="fabric"
                  value="cotton"
                  checked={selectedFabric === "cotton"}
                  onChange={() => handleRadioChange("cotton")}
                />
                <p>Cotton</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="rounded-full"
                  name="fabric"
                  value="tencel"
                  checked={selectedFabric === "tencel"}
                  onChange={() => handleRadioChange("tencel")}
                />
                <p>Tencel</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="rounded-full"
                  name="fabric"
                  value="linen"
                  checked={selectedFabric === "linen"}
                  onChange={() => handleRadioChange("linen")}
                />
                <p>Linen</p>
              </div>
              {/* Repeat similar structure for other fabric options */}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p style={{ color: ApiColor }} className="  text-lg">
              SIZE
            </p>
            <div className="flex flex-wrap justify-start items-start gap-4 ">
              {availableSizes.map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <input
                    type="radio"
                    className="rounded-full"
                    value={size} // Use lowercase for consistency
                    name="size"
                    checked={selectedSize === size}
                    onChange={handleSizeChange}
                  />
                  <p>{size}</p>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full"
        onClick={() => {
          setFilterOpen(false);
        }}
      ></div>
    </div>
  );
};

export default FilterSide;
