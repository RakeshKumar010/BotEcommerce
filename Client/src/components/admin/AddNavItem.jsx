import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ApiColor } from "../api/data";
const baseUrl = import.meta.env.VITE_APP_URL;

const AddNavItem = () => {
  const [nav1, setNav1] = useState("");
  const [nav2, setNav2] = useState("");
  const [nav3, setNav3] = useState("");
  const [nav4, setNav4] = useState("");
  const [nav5, setNav5] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    const clientId = user._id;

    if (data.length > 0) {
      let response = await fetch(
        `${baseUrl}/update-nav-item/${data[0]._id}`,
        {
          method: "put",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ clientId, nav1, nav2, nav3, nav4, nav5 }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Navbar Text added successfully!",
          icon: "success",
            confirmButtonColor: `${ApiColor?ApiColor:'black'}`,
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    } else {
      let response = await fetch(`${baseUrl}/add-nav-item`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ clientId, nav1, nav2, nav3, nav4, nav5 }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Social link added successfully!",
          icon: "success",
            confirmButtonColor: `${ApiColor?ApiColor:'black'}`,
        }).then(() => {
          location.reload();
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    }
  };
  useEffect(() => {
    const getData = async () => {
      let result = await fetch(`${baseUrl}/nav-item`);
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
          className="text-center text-2xl font-bold "
          style={{ color: ApiColor }}
        >
          Add Navbar Item
        </h1>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Navbar Text 1
          </p>
          <input
            type="text"
            value={nav1}
            onChange={(e) => setNav1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Navbar Text 2
          </p>
          <input
            type="text"
            value={nav2}
            onChange={(e) => setNav2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Navbar Text 3
          </p>
          <input
            type="text"
            value={nav3}
            onChange={(e) => setNav3(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Navbar Text 4
          </p>
          <input
            type="text"
            value={nav4}
            onChange={(e) => setNav4(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Navbar Text 5
          </p>
          <input
            type="text"
            value={nav5}
            onChange={(e) => setNav5(e.target.value)}
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

export default AddNavItem;
