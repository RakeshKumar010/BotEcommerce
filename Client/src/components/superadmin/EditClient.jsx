import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EditClient = () => {
  const location = useLocation();
  const navigater = useNavigate();
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pass, setPass] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [status, setStatus] = useState("1");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "https://psyrealestate.in/edit-client/" +
        location.pathname.split("/").pop(),
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          domain,
          email,
          number,
          pass,
          expiryDate,
          status,
        }),
      }
    );

    if (result.ok) {
      Swal.fire({
        title: "Success",
        text: "Edited successfully!",
        icon: "success",
        confirmButtonColor: `#1f2937`,
      }).then((result) => {
        if (result.value) {
          navigater("/super-admin/all-client");
        }
      });
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    const getFun = async () => {
      let result = await fetch(
        "https://psyrealestate.in/show-client/" +
          location.pathname.split("/").pop()
      );
      result = await result.json();
      console.log(result);
      setName(result.name);
      setEmail(result.email);
      setNumber(result.number);
      setPass(result.pass);
      setExpiryDate(result.expiryDate);
      setDomain(result.domain);
      setStatus(result.status);
    };
    getFun();
  }, []);
  return (
    <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[95vw] md:w-[50vw] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1
          className="text-center text-2xl font-bold "
          style={{ color: "#1f2937" }}
        >
          Edit Client
        </h1>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="domain"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Domain
          </label>
          <input
            id="domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            min="0"
            max="5"
            step="0.1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number
          </label>
          <input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="pass"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="pass"
            type="password"
            min="0"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="expiryDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Expiry Date
          </label>
          <input
            id="expiryDate"
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <p className="block text-gray-700 text-sm font-bold mb-2">Status</p>
          <div className="mt-2">
            <label>
              <input
                type="radio"
                value="1"
                checked={status === "1"}
                onChange={(e) => setStatus(e.target.value)}
                className="mr-2 leading-tight"
              />
              <span className="text-sm">Active</span>
            </label>
            <label className="ml-6">
              <input
                type="radio"
                value="0"
                checked={status === "0"}
                onChange={(e) => setStatus(e.target.value)}
                className="mr-2 leading-tight"
              />
              <span className="text-sm">Unactive</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#1f2937" }}
          className="  w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default EditClient;
