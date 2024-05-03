import React from "react";
import { FaRecycle, FaSitemap, FaUserAlt } from "react-icons/fa";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { IoCash } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";

const DashBoard = () => {
  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full md:w-[82%]">
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4  ">
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaSitemap  className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">8</p>
            <p>Products</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <MdAdminPanelSettings  className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">2</p>
            <p>Admin</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaPeopleGroup className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>Visitors</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaRecycle   className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>Recycle Bin</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaCartShopping  className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <LiaShippingFastSolid  className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>Cash on Delivery</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <IoCash  className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>Direct Payment</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <FaUserAlt   className="text-black text-2xl" />

          </div>
          <div className="text-right">
            <p className="text-2xl">0</p>
            <p>User</p>
          </div>
        </div>
        
         
      </div>
    </div>
  );
};

export default DashBoard;
