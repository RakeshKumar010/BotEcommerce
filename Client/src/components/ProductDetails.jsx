import React, { useEffect, useState } from "react";
import NavBar from "./global/NavBar";
import { Link, useLocation } from "react-router-dom";
import { FaVanShuttle } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";
import Footer from "./global/Footer";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
  const location = useLocation();
  const [data, setData] = useState("");
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
    getFun();
  }, []);
  return (
    <>
      <NavBar />
      <div className="bg-gray-100  py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="w-full h-full rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full object-cover rounded-md object-top"
                  src={data.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                {data.title}
              </h2>

              <div className="flex my-10">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Price:</span>
                  <span className="text-gray-600 ">₹{data.price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">In Stock</span>
                </div>
              </div>
              <div className="my-10">
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
                <div>
                  <p className="font-bold">Customize your order:</p>
                  <textarea
                    className="w-full focus:ring-0 focus:outline-none bg-gray-200"
                    rows="5"
                    placeholder="Add special instructions or customization..."
                  ></textarea>
                </div>
              </div>

              <div className="flex -mx-2 my-10">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-20 border-0 border-b-[1px] bg-gray-100 px-0"
                />
                <div className="w-1/2 px-2">
                  <p className="w-full bg-uiColor text-center text-nowrap text-white py-2 px-4 rounded-md font-bold hover:bg-uiColor/90 ">
                    Add to Cart
                  </p>
                </div>
                <div className="w-1/2 px-2">
                  <Link to={'buy-now'} >
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
              <table className="border-collapse border border-gray-300 my-10">
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
                    <td className="p-2 border border-gray-300">AVAILABLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
