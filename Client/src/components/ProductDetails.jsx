import React, { useEffect, useState } from "react";
import NavBar from "./global/NavBar";
import { Link, useLocation } from "react-router-dom";
import { FaVanShuttle } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";
import Footer from "./global/Footer";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  const location = useLocation();
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
      `https://botecommerce.onrender.com${location.pathname}`
    );
    result = await result.json();
    if (result) {
      setData(result);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getFun();
  }, [location.pathname]);
  return (
    <>
      <NavBar />
      <div className="bg-gray-100  py-8">
        <div className="sm:w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row  gap-2  px-4 ">
              <div className="w-full h-full rounded-lg bg-gray-300  mb-4">
                {data.image && (
                  <img
                    className="w-full h-full object-cover rounded-md object-top"
                    src={`https://botecommerce.onrender.com/${
                      imageUrl == null ? data.image[3] : imageUrl
                    }`}
                    alt="Product Image"
                  />
                )}
              </div>

              <div className="flex flex-row md:flex-col justify-center items-center gap-2 ">
                {data.image &&
                  [...data.image].reverse().map((value) => {
                    return (
                      <img
                        onClick={() => {
                          setImageUrl(value);
                        }}
                        className=" rounded-md w-16 md:w-36"
                        src={`https://botecommerce.onrender.com/${value}`}
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
                <span className="font-bold text-gray-700 ">Select Size:</span>
                <div className="flex items-center mt-2 md:flex-nowrap gap-y-2 flex-wrap">
                  {data.selectedSizes &&
                    data.selectedSizes.map((value) => {
                      return (
                        <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                          {value}
                        </button>
                      );
                    })}
                </div>
              </div>

              <div>
                <p className="font-bold">Customize your order:</p>
                <textarea
                  className="w-full focus:ring-0 focus:outline-none bg-gray-200"
                  rows="5"
                  placeholder="Add special instructions or customization..."
                ></textarea>
              </div>

              <div className="flex -mx-2">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-20 border-0 border-b-[1px] focus:ring-0    bg-gray-100 px-0"
                />
                <div className="w-1/2 px-2">
                  <p className="w-full bg-uiColor text-center text-nowrap text-white py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 ">
                    Add to Cart
                  </p>
                </div>
                <div className="w-1/2 px-2">
                  <Link to={"buy-now"}>
                    <p className="w-full bg-uiColor  text-center text-white   py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 ">
                      Buy Now
                    </p>
                  </Link>
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
              </div>
              <table className="border-collapse border border-gray-300">
                <tbody>
                  <tr className="border border-gray-300">
                    <td className="p-2 border border-gray-300">VENDOR:</td>
                    <td className="p-2 border border-gray-300">BHAVINIPARIS</td>
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
        <div className="md:w-[70%] text-uiColor  mx-auto  font-bold my-10 px-2">
          <p className="text-center underline text-lg text-black font-normal my-10 underline-offset-4">
            DESCRIPTION
          </p>
          <div className="my-5">
            {data.points &&
              data.points.map((value) => {
                return <p>&#10687;{value}</p>;
              })}
          </div>
          <div className="w-full">
            <table className="table-auto w-full border border-gray-500">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="p-2">Dispatch Time</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.dispatchTime}
                  </td>
                </tr>

                <tr className="border-b border-gray-500">
                  <td className="p-2">Fabric Composition</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.fabric}
                  </td>
                </tr>

                <tr className="border-b border-gray-500">
                  <td className="p-2">No. of pieces in a set</td>
                  <td className="p-2 border-l border-gray-500">
                    {data.pieces}
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="p-2">Size</td>
                  <td className="p-2 border-l border-gray-500 flex flex-wrap gap-3">
                    {data.selectedSizes &&
                      data.selectedSizes.map((value) => {
                        return <span>{value}</span>;
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
