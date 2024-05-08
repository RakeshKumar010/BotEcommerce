import React, { useState } from "react";

const FilterSide = ({ setFilterOpen }) => {
  const [intRate, setIntRate] = useState(7);
  const [availability, setAvailability] = useState("");
  return (
    <div className="fixed  top-0 bottom-0 left-0 right-0 bg-black/50 z-50 flex">
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
            <p className="text-uiColor text-lg">Availability</p>
            <div className="mt-2 flex  justify-start items-start flex-wrap">
              <label>
                <input
                  type="radio"
                  value="Available"
                  checked={availability === "Available"}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Available</span>
              </label>
              <label className="ml-6">
                <input
                  type="radio"
                  value="Unavailable"
                  checked={availability === "Unavailable"}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Unavailable</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-uiColor text-lg">Fabric</p>
            <div className="flex justify-start items-start flex-wrap gap-4 ">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="rounded-full"
                  name="georgette"
                />
                <p>Georgette</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="rounded-full"
                  name="cotton"
                />
                <p>Cotton</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="rounded-full"
                  name="tencel"
                />
                <p>Tencel</p>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="rounded-full"
                  name="linen"
                />
                <p>Linen</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-uiColor text-lg">SIZE</p>
            <div className="flex flex-wrap justify-start items-start gap-4 ">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="xs" />
                <p>XS</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="s" />
                <p>S</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="m" />
                <p>M</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="l" />
                <p>L</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="xl" />
                <p>XL</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="xxl" />
                <p> XXL</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="3xxl" />
                <p> 3XXL</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="rounded-full" name="4xxl" />
                <p> 4XXL</p>
              </div>
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
