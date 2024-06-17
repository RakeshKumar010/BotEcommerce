import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";

import Swal from "sweetalert2";
import { ApiColor } from "../api/data";
const AddSocialLink = () => {
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userString = localStorage.getItem("user");
    let user = JSON.parse(userString);
    const clientId = user._id;

    if (data.length > 0) {
      let response = await fetch(
        "https://psyrealestate.in/update-social-link/" + data[0]._id,
        {
          method: "put",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ clientId, facebook, insta, youtube, twitter }),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Social link added successfully!",
          icon: "success",
          confirmButtonColor: `${ApiColor}`,
        }).then(() => {
          location.reload();
        });
      } else {
        alert("HTTP-Error: " + response.status);
      }
    } else {
      let response = await fetch("https://psyrealestate.in/add-social-link", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ clientId, facebook, insta, youtube, twitter }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Social link added successfully!",
          icon: "success",
          confirmButtonColor: `${ApiColor}`,
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
      let result = await fetch("https://psyrealestate.in/social");
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
          Add Social Media
        </h1>
        <div>
          <p className="text-gray-700 text-sm font-bold mb-2 flex items-center gap-1">
            <FaFacebook />
            Facebook{" "}
          </p>
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold mb-2 flex items-center gap-1">
            <RiInstagramFill /> Instagram
          </p>
          <input
            type="text"
            value={insta}
            onChange={(e) => setInsta(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold mb-2 flex items-center gap-1">
            <SiYoutubemusic /> Youtube
          </p>
          <input
            type="text"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="text-gray-700 text-sm font-bold mb-2 flex items-center gap-1">
            <FaSquareXTwitter />
            Twitter
          </p>
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
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

export default AddSocialLink;
