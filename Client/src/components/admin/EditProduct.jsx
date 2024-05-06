import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
const categories = [
  "New-Arrivals",
  "Suit-Sets",
  "Celebrity-Stylists",
  "Best-Seller",
  "Lehenga-Sets",
];

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState();

  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [image, setImage] = useState([]);
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

   

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/"+location.pathname.split("/").pop());
      result = await result.json();
      setData(result);
      console.log(result);
    };
    getFun();
  }, []);
  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full md:w-[82%]">
      <form
        
        className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-2xl font-bold">Edit Product</h1>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Title </p>
          <input
            type="text"
            value={data ? data.title : ''}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Image</p>
          <input
            type="file"
            multiple
            
            
            onChange={(e) => setImage(e.target.files)}
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
          
              value={data ? data.pieces : ''}
              onChange={(e) => setPieces(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Rating</p>
            <input
              type="text"
              value={data ? data.rating : ''}
              onChange={(e) => setRating(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Price</p>
            <input
              type="text"
              value={data ? data.price : ''}
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
              value={data ? data.dispatchTime : ''}
              onChange={(e) => setDispatchTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Offer</p>
            <input
              type="text"
              value={data ? data.offer : ''}
              onChange={(e) => setOffer(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <p className="block text-gray-700 text-sm font-bold mb-2">Fabric</p>
            <input
              type="text"
    
              value={data ? data.fabric : ''}
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

        <div className="py-6">
          <p className="block text-gray-700 text-sm font-bold mb-2">Section</p>
          <div className="flex justify-between flex-wrap">
            {categories.map((category) => (
              <div key={category} className="mb-3">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio rounded-full text-blue-600"
                    name="category"
                    value={category}
                    checked={section === category}
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                  />
                  <span className="ml-2 text-gray-700 ">{category}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Size</p>

          <div className="py-4 flex gap-6 flex-wrap">
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

export default EditProduct;