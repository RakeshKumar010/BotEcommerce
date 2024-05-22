import React, { useEffect, useState } from "react";
import NavBar from "./global/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaVanShuttle } from "react-icons/fa6";
import { MdChangeCircle, MdOutlineAddBusiness } from "react-icons/md";
import Footer from "./global/Footer";
import RelatedProduct from "./RelatedProduct";
import { IoCash } from "react-icons/io5";
import HeaderTop from "./HeaderTop";
import { BsCartCheckFill } from "react-icons/bs";

const ProductDetails = () => {
  const location = useLocation();
  const navigater = useNavigate();
  const [sizes, setSizes] = useState("M");
  const [massage, setMassage] = useState();
  const [number, setNumber] = useState(1);
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState("");
  let offer = data.offer; // "20% off"
  let discount = parseInt(offer); // 20
  let price = data.price;
  let priceNumber = parseInt(price); // 5299.00

  let currentPrice = priceNumber - priceNumber * (discount / 100);
  // currentPrice=currentPrice-discount

  async function getFun() {
    let result = await fetch(
      `http://43.204.35.127:3000${location.pathname}`
    );
    result = await result.json();
    if (result) {
      setData(result);
    }
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getFun();
  }, [location.pathname]);
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="bg-gray-100  py-8 overflow-hidden">
        <div className="sm:w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col  lg:flex-row">
            <div className="flex flex-col md:flex-row  gap-2  px-4 ">
              <div className="w-full h-full rounded-lg bg-gray-300  mb-4">
                {data.image && (
                  <img
                    className="w-full h-full object-cover rounded-md object-top"
                    src={`http://43.204.35.127:3000/${
                      imageUrl == null ? data.image[3] : imageUrl
                    }`}
                    alt="Product Image"
                  />
                )}
              </div>

              <div className="flex flex-row md:flex-col justify-center items-center gap-2 ">
                {data.image &&
                  [...data.image].reverse().map((value, index) => {
                    return (
                      <img
                        key={index}
                        onClick={() => {
                          setImageUrl(value);
                        }}
                        className=" rounded-md w-16 md:w-36"
                        src={`http://43.204.35.127:3000/${value}`}
                        alt="Product Image"
                      />
                    );
                  })}
              </div>
            </div>

            <div className="flex flex-col gap-6 my-5 md:my-0 px-4">
              <h2 className="text-2xl font-bold text-gray-800  ">
                {data.title}
              </h2>
              <div className="flex items-center  gap-2">
                <span className="bg-[#388e3c] text-white text-[12px] font-bold p-1 px-2 rounded-md">
                  {data.rating} ★
                </span>
                <span>82,352 Ratings & 5,670 Reviews</span>
              </div>

              <div>
                <span className="text-[#388e3c] font-semibold">
                  Extra ₹{priceNumber * (discount / 100)} off
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
                  {data.availability == "Available"
                    ? "In Stock"
                    : "Out of Stock"}
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
                  rows="5"
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
                        navigater("buy-now");
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
              <div className="flex gap-10">
                <div className="w-28">
                  <MdChangeCircle className="text-5xl" />
                  <p>Return and Exchange</p>
                </div>
                <div className="w-28">
                  <FaVanShuttle className="text-5xl" />
                  <p>Free Delivery within India</p>
                </div>
                <div className="w-28">
                  <IoCash className="text-5xl" />
                  <p>Cash On Delivery</p>
                </div>
              </div>
              <table className="border-collapse border border-gray-300">
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="p-2 border border-gray-300">VENDOR:</td>
                    <td className="p-2 border border-gray-300">CartCraze</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="p-2 border border-gray-300">TYPE:</td>
                    <td className="p-2 border border-gray-300">CLOTHING</td>
                  </tr>
                  <tr className="border border-gray-300">
                    <td className="p-2 border border-gray-300">AVAILABLE:</td>
                    <td className="p-2 border border-gray-300 uppercase">
                      {data.availability}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="md:w-[90%]  text-uiColor mx-auto font-bold my-10 p-5 shadow-lg rounded-lg">
          <h2 className="text-center text-2xl text-black bg-gray-200 font-bold my-10 underline-offset-4">
            DESCRIPTION
          </h2>
          <div className="my-5">
            {data.points &&
              data.points.map((value, index) => {
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    ⦿ {value}
                  </p>
                );
              })}
          </div>
          <div className="w-full">
            <table className="table-auto w-full border border-gray-500 text-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 font-bold">Attribute</th>
                  <th className="p-2 font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="p-2 font-bold">Dispatch Time</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.dispatchTime}
                  </td>
                </tr>

                <tr className="border-b border-gray-500">
                  <td className="p-2 font-bold">Fabric Composition</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.fabric}
                  </td>
                </tr>

                <tr className="border-b border-gray-500">
                  <td className="p-2 font-bold">No. of pieces in a set</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.pieces}
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="p-2 font-bold">Size</td>
                  <td className="p-2 border-l border-gray-500 flex flex-wrap gap-3">
                    {data.selectedSizes &&
                      data.selectedSizes.map((value) => {
                        return (
                          <span className="bg-gray-200 p-1 rounded">
                            {value}
                          </span>
                        );
                      })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <RelatedProduct />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
