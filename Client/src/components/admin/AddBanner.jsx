import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ApiColor } from "../api/data";
const baseUrl = import.meta.env.VITE_APP_URL;
const AddBanner = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    const clientId = user._id;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("clientId", clientId);
    if (data.length > 0) {
      let response = await fetch(`${baseUrl}/update-banner/${data[0]._id}`, {
        method: "put",
        body: formData,
      });
      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Banner added successfully!",
          icon: "success",
          confirmButtonColor: `${ApiColor ? ApiColor : "black"}`,
        }).then((result) => {
          if (result.value) {
            location.reload();
          }
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    } else {
      let response = await fetch(`${baseUrl}/add-banner`, {
        method: "post",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Banner added successfully!",
          icon: "success",
          confirmButtonColor: `${ApiColor ? ApiColor : "black"}`,
        }).then((result) => {
          if (result.value) {
            location.reload();
          }
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    }
  };
  useEffect(() => {
    const getData = async () => {
      let result = await fetch(`${baseUrl}/banner`);
      result = await result.json();
      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);
      const filteredResults = result.filter(
        (value) => value.clientId === user._id
      );
      setData(filteredResults);
    };
    getData();
  }, []);
  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[90vw] md:w-[50vw] bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4"
      >
        <h1
          className="text-center text-2xl font-bold  "
          style={{ color: ApiColor }}
        >
          Add Banner
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
          style={
            ApiColor
              ? { backgroundColor: ApiColor }
              : { backgroundColor: "black" }
          }
          className=" w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBanner;
