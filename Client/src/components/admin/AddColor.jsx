import React, { useState } from "react";
import Swal from "sweetalert2";
import { SketchPicker } from "react-color";
import { ApiColor } from "../api/data";
const AddColor = () => {
  const [currentColor, setCurrentColor] = useState();
  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
    // console.log(color.hex);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let response = await fetch("https://psyrealestate.in/add-color/6669600095cbcdd32221dd49", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ color: currentColor }),
    });
  
    if (response.ok) {
      Swal.fire({
        title: "Success",
        text: "Color added successfully!",
        icon: "success",
        confirmButtonColor: '#0000',
      }).then((result) => {
        if (result.value) {
          location.reload();
        }
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
        <h1   className="text-center text-2xl text-black font-bold ">
          Add Colors
        </h1>
        <div className="flex justify-center">
          <SketchPicker
            color={currentColor}
            onChangeComplete={handleColorChange}
          />
        </div>

        <button
          type="submit"
          
          className=" w-full hover:shadow-xl bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddColor;
