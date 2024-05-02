import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [fabric, setFabric] = useState("");
  const [dispatchTime, setDispatchTime] = useState("");
  const [pieces, setPieces] = useState("");
  const [availability, setAvailability] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [points, setPoints] = useState([""]);

  const handleInputChange = (e, index) => {
    const newPoints = [...points];
    newPoints[index] = e.target.value;
    setPoints(newPoints);

  };

  const handleAddClick = () => {
    setPoints([...points, ""]);
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(value)
        ? prevSizes.filter((size) => size !== value)
        : [...prevSizes, value]
    );
    
  };

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
        offer,
        fabric,
        dispatchTime,
        pieces,
        availability,
        selectedSizes,
        points,
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
        <div className="flex items-center justify-between">
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">
              No. of pieces in a set
            </p>
            <input
              type="text"
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Rating</p>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Dispatch Time in Days
            </p>
            <input
              type="text"
              value={dispatchTime}
              onChange={(e) => setDispatchTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Offer</p>
            <input
              type="text"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Fabric</p>
            <input
              type="text"
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Availability
          </p>
          <div className="mt-2">
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
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Size</p>

          <div className="py-4 flex gap-6">
            {sizes.map((size, index) => (
              <div key={index} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded-full h-4 w-4 text-blue-600"
                    value={size}
                    onChange={handleSizeChange}
                  />
                  <span className="ml-1 text-gray-700">{size}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          {points.map((point, index) => (
            <div key={index}>
              <p className="block text-gray-700 text-sm font-bold mb-2">
                Point {index}
              </p>
              <input
                type="text"
                value={point}
                onChange={(e) => handleInputChange(e, index)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>
          ))}
          <div className="flex justify-end my-1">
            <p
              className="text-end bg-black text-white py-2 px-5 rounded-md cursor-pointer"
              onClick={handleAddClick}
            >
              Add More Points
            </p>
          </div>
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
