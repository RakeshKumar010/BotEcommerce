import React, { useState } from "react";
import Swal from "sweetalert2"

const AddCarousel = () => {
    const [image, setImage] = useState();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
  
      let response = await fetch("http://65.2.144.134:3000/add-carousel", {
        method: "post",
        body: formData,
      });
      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Logo added successfully!",
          icon: "success",
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    };
  
    return (
      <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-2xl font-bold text-teal-400">
            Add Carousel
          </h1>
          <div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
  
          <button
            type="submit"
            className="bg-teal-400 w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

export default AddCarousel