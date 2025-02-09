import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiColor } from "../api/data";
const baseUrl = import.meta.env.VITE_APP_URL;

const EditAccounts = () => {
    const location =useLocation()
    const navigate =useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [addProduct, setAddProduct] = useState("");
    const [editProduct, setEditProduct] = useState("");
    const [deleteProduct, setDeleteProduct] = useState("");
    const [addCoupon, setAddCoupon] = useState("");
    const [editCoupon, setEditCoupon] = useState("");
    const [deleteCoupon, setDeleteCoupon] = useState("");

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(`${baseUrl}/client/${location.pathname.split("/").pop()}`, {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, pass,addProduct,editProduct,deleteProduct,addCoupon,editCoupon,deleteCoupon }),
      });
  
      if (result.ok) {
        Swal.fire({
          title: "Success",
          text: "Edited successfully!",
          icon: "success",
            confirmButtonColor: `${ApiColor?ApiColor:'black'}`
        });
        setTimeout(() => {
            navigate('/admin/account')
        }, 1000);
      } else {
        console.log("error");
      }
    };
    useEffect(() => {
        const getFun = async () => {
          let result = await fetch(`${baseUrl}/client/${location.pathname.split("/").pop()}`);
          result = await result.json();
          setName(result.name)
          setEmail(result.email)
          setPass(result.pass)
          setAddProduct(result.addProduct)
          setEditProduct(result.editProduct)
          setDeleteProduct(result.deleteProduct)
          setAddCoupon(result.addCoupon)
          setEditCoupon(result.editCoupon)
          setDeleteCoupon(result.deleteCoupon)
        };
        getFun();
      }, []);
    return (
      <div className="absolute flex justify-center items-center bg-gray-100 right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[95vw] md:w-[50vw] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-2xl font-bold " style={{color:ApiColor}}>
            Edit Account
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
          <div className="flex flex-col gap-8 py-5">
          <p className="text-center font-semibold " style={{color:ApiColor}}>Accessibility</p>
            <div className="flex items-center justify-between">
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="add-product"
                >
                  Add Product
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="add-product"
                    value={addProduct}
                    onChange={(event) => {
                      setAddProduct(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="edit-product"
                >
                  Edit Product
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="edit-product"
                    value={editProduct}
                    onChange={(event) => {
                      setEditProduct(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="delete-product"
                >
                  Delete Product
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="delete-product"
                    value={deleteProduct}
                    onChange={(event) => {
                      setDeleteProduct(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="add-coupon"
                >
                  Add Coupon
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="add-coupon"
                    value={addCoupon}
                    onChange={(event) => {
                      setAddCoupon(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="edit-coupon"
                >
                  Edit Coupon
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="edit-coupon"
                    value={editCoupon}
                    onChange={(event) => {
                      setEditCoupon(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="delete-coupon"
                >
                  Delete Coupon
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:ring-0 focus:bg-white focus:border-gray-500"
                    id="delete-coupon"
                    value={deleteCoupon}
                    onChange={(event) => {
                      setDeleteCoupon(event.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            style={{backgroundColor:ApiColor}}
            className=" w-full hover:shadow-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </form>
      </div>
    );
  };

export default EditAccounts