import React, { useEffect, useState } from "react";
import { MdChangeCircle, MdOutlineAddBusiness } from "react-icons/md";
import { FaVanShuttle } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoCash } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProDetailsPopup = ({ setDetailsPopup, addId }) => {
  const navigater = useNavigate();
  const [data, setData] = useState("");
  const [sizes, setSizes] = useState("M");
  const [massage, setMassage] = useState();
  const [number, setNumber] = useState(1);

  let offer = data.offer; // "20% off"
  let discount = offer ? parseInt(offer) : 0; // 20 or default to 0 if 'offer' is not defined
  let price = data.price;
  let priceNumber = price ? parseInt(price.replace(/,/g, "")) : 0; // Convert price to number or default to 0
  let currentPrice = priceNumber - priceNumber * (discount / 100);
  currentPrice = currentPrice.toFixed();

  let extraoff = priceNumber * (discount / 100);
  extraoff = extraoff.toFixed();
  async function getFun() {
    let result = await fetch(`https://psyrealestate.in/${addId}`);
    result = await result.json();
    if (result) {
      setData(result);
    }
  }
  useEffect(() => {
    getFun();
  }, []);
  return (
    <div
      className="flex   z-[100] justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black/30 p-3 md:p-0 backdrop-blur-sm  w-full   "
    
    >
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
              src={data ? `https://psyrealestate.in/${data.image[0]}` : null}
              alt="Product Image"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between my-5 md:my-0 px-4">
          <p>{addId}</p>
          <h2 className="text-2xl font-bold text-gray-800  ">{data.title}</h2>
          <div className="flex items-center  gap-2">
            <span className="bg-[#388e3c] text-white text-[12px] font-bold p-1 px-2 rounded-md">
              {data.rating} ★
            </span>
            <span>82,352 Ratings & 5,670 Reviews</span>
          </div>

          <div>
            <span className="text-[#388e3c] font-semibold">
              Extra ₹{extraoff} off
            </span>
            <div className=" flex gap-3 items-center">
              <span className=" text-xl font-bold">₹{currentPrice}</span>

              <div className="flex items-center gap-2">
                <span className="text-gray-600 line-through">
                  ₹{data.price}
                </span>
                <span className="text-[#388e3c] font-semibold">
                  {data.offer}% off
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-bold ">Availability:</span>
            <span className="">
              {" "}
              {data.availability == "Available" ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <div>
            <span className="font-bold text-gray-700 ">Select Size: </span>
            <div className="flex items-center mt-2 md:flex-nowrap gap-y-2 flex-wrap">
              {data.selectedSizes &&
                data.selectedSizes.map((value, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSizes(value);
                      }}
                      className={`  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 ${
                        sizes == value
                          ? "bg-[#388e3c] text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      {value}
                    </button>
                  );
                })}
            </div>
          </div>

          <div>
            <p className="font-bold">Customize your order:</p>
            <textarea
              value={massage}
              onChange={(e) => {
                setMassage(e.target.value);
              }}
              className="w-full focus:ring-0 focus:outline-none bg-gray-200"
              rows="1"
              placeholder="Add special instructions or customization..."
            ></textarea>
          </div>

          <div className="flex -mx-2">
            <input
              type="number"
              value={number}
              min={1}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="w-20 border-0 border-b-[1px] focus:ring-0    bg-gray-100 px-0"
            />
            <div className="flex md:static bg-white py-2 fixed bottom-0 right-0 left-0">
              <div className="w-1/2 px-2">
                <p
                  onClick={() => {
                    navigater("/add-to-cart");
                    const obj = {
                      title: data.title,
                      currentPrice,
                      sizes,
                      number,
                      imageUrl: data.image[3],
                    };
                    let existingItems = localStorage.getItem("myCart");
                    existingItems = existingItems
                      ? JSON.parse(existingItems)
                      : [];
                    existingItems.push(obj);
                    localStorage.setItem(
                      "myCart",
                      JSON.stringify(existingItems)
                    );
                  }}
                  className="w-full flex items-center gap-2 justify-center cursor-pointer hover:scale-105 hover:shadow-md 
                      hover:bg-gray-600 transition-all duration-200 bg-uiColor text-center text-nowrap text-white py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 "
                >
                  <MdOutlineAddBusiness className="w-10  " />
                  Add to Cart
                </p>
              </div>
              <div className="w-1/2 px-2">
                <p
                  onClick={() => {
                    let id ='/'+data._id+'/buy-now';
                    navigater(id);
                    const obj = {
                      title: data.title,
                      currentPrice,
                      sizes,
                      number,
                      massage,
                      imageUrl: data.image[3],
                    };
                    sessionStorage.setItem("myObject", JSON.stringify(obj));
                  }}
                  className="w-full flex items-center gap-2 justify-center cursor-pointer hover:scale-105 hover:shadow-md hover:bg-gray-600 transition-all duration-200 bg-uiColor text-nowrap  text-center text-white   py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 "
                >
                  <BsCartCheckFill />
                  Buy Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetailsPopup;
