import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [vendor, setVendor] = useState("");
  const [color, setcolor] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [packContains, setPackContains] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("https://botecommerce.onrender.com/add-products", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        image,
        rating,
        price,
        vendor,
        color,
        dimensions,
        packContains,
      }),
    });
    if (result) {
      navigate("/admin/product");
    }
  };

  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full md:w-[82%]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-2xl font-bold">Add Product</h1>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Title</p>
          <input
         
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </p>
          <input
     
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Rating</p>
          <input
          
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
          <input
          
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Vendor</p>
          <input
            type="text"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Color</p>
          <input
            type="text"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Dimensions
          </p>
          <input
            type="text"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Pack Contains
          </p>
          <input
            type="text"
            value={packContains}
            onChange={(e) => setPackContains(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-900 w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
