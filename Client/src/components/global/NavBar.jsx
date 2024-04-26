import React, { useState } from "react";
import {  IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [navRes,setNavRes]=useState(false)
  return (
    <div className="flex items-center justify-between  lg:py-2 p-5 lg:px-16">
      <IoReorderThreeOutline className="cursor-pointer text-3xl lg:hidden block" onClick={()=>{
        setNavRes(!navRes)
      }}/>

      <img
        src="https://bhaviniparis.com/cdn/shop/files/bhavini_paris_logo_file-01_360x.jpg?v=1702467865"
        alt="..."
        className="h-8 lg:h-16"
      />
      <ul  className={`lg:flex lg:flex-row flex-col lg:static absolute left-0 top-0 bottom-0 bg-white gap-7 p-8  lg:h-auto z-50 lg:w-auto w-[80%] lg:items-center text-nowrap ${navRes?'flex':'hidden'}`}>
        <div className="lg:hidden flex justify-between items-center  py-2 px-1 w-full bg-gray-100">
          <input
            type="text"
            placeholder="Search Products.."
            className="w-[70%] border-0 bg-gray-100 px-2"
          />
          <IoSearchOutline className="text-xl"/>
        </div>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>HOME</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>NEW ARRIVALS</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>SUIT SETS</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>CELEBRITY STYLISTS</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>BEST SELLER</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="">
          <li>LEHENGA SETS</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="text-gray-400 md:hidden block ">
          <li>Sign In</li>
        </Link>
        <Link to={"/"} onClick={()=>{
        setNavRes(!navRes)
      }} className="text-gray-400 md:hidden block ">
          <li>Register</li>
        </Link>
      </ul>
      <div className="flex gap-6">
        <IoSearchOutline className="text-2xl hidden lg:block" />
        <IoBagHandleOutline className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
