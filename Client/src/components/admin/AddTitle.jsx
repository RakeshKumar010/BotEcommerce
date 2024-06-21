import React, { useEffect, useState } from "react";
import { ApiColor } from "../api/data";
import Swal from "sweetalert2";

const AddTitle = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);

    if (data.length > 0) {
      let response = await fetch(
        "https://psyrealestate.in/update-title/" + data[0]._id,
        {
          method: "put",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ title }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Title added successfully!",
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
      let response = await fetch("https://psyrealestate.in/add-title", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, clientId: user._id }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Title added successfully!",
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
      let result = await fetch("https://psyrealestate.in/title");
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
          style={ApiColor ? { color: ApiColor } : { color: "black" }}
          className="text-center text-2xl font-bold "
        >
          Add Title
        </h1>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Title</p>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
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
          className=" w-full hover:shadow-xl   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTitle;
