import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const ProDetailsPopup = ({ setDetailsPopup, addId }) => {
  const location = useLocation();
  const [data, setData] = useState("");
  async function getFun() {
    let result = await fetch(`http://13.201.55.203:3000/${addId}`);
    result = await result.json();
    if (result) {
      setData(result);
    }
  }
  useEffect(() => {
    getFun();
  }, []);
  return (
    <div className="flex justify-center items-center z-[100] fixed p-3 md:p-0   w-full h-screen bg-black/30">
      <div className="flex flex-col md:flex-row -mx-4 md:w-[70vw] w-full md:h-[80vh] h-[90vh] p-4 md:p-10 rounded-md  relative  bg-white">
        <IoMdClose
          onClick={() => {
            setDetailsPopup(false);
          }}
          className=" text-3xl cursor-pointer absolute right-0 top-0 text-black"
        />
        <div className="md:flex-1 px-4">
          <div className="w-full h-full rounded-lg bg-gray-300   ">
            <img
              className="w-full  h-[40vh] md:h-full object-cover rounded-md object-top"
              src={data.image}
              alt="Product Image"
            />
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="md:text-2xl text-xl font-bold text-gray-800  my-2 md:mb-2">
            {data.title}
          </h2>

          <div className="flex my-4 md:my-10">
            <div className="mr-4">
              <span className="font-bold text-gray-700 ">Price:</span>
              <span className="text-gray-600 ">₹{data.price}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700 ">Availability:</span>
              <span className="text-gray-600 ">In Stock</span>
            </div>
          </div>
          <div className="my-4 md:my-10">
            <div className="mb-4">
              <span className="font-bold text-gray-700 ">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  S
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  M
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  L
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  XL
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  XXL
                </button>
              </div>
            </div>
            <div className="md:block hidden">
              <p className="font-bold">Customize your order:</p>
              <textarea
                className="w-full focus:ring-0 focus:outline-none bg-gray-200"
                rows="5"
                placeholder="Add special instructions or customization..."
              ></textarea>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-3 md:gap-0 -mx-2 my-4 md:my-10">
            <input
              type="number"
              defaultValue={1}
              className="w-20 border-0 border-b-[1px] bg-gray-100 px-0"
            />
            <div className="w-1/2 md:px-2">
              <p className="w-full bg-uiColor text-center text-nowrap text-white py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 ">
                Add to Cart
              </p>
            </div>
            <div className="w-1/2 md:px-2">
              <p className="w-full bg-uiColor  text-center text-white   py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 ">
                Buy Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetailsPopup;
