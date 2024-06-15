import React, { useEffect, useState } from "react";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { ApiColor } from "../api/data";
import { FaShoppingCart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

const navItems = [
  { to: "/", text: "HOME" },
  { to: "/new-arrivals", text: "NEW ARRIVALS" },
  { to: "/suit-sets", text: "SUIT SETS" },
  { to: "/celebrity-stylists", text: "CELEBRITY STYLISTS" },
  { to: "/best-seller", text: "BEST SELLER" },
  { to: "/lehenga-sets", text: "LEHENGA SETS" },
  {
    to: "/sign-in",
    text: "Sign In",
    className: "text-gray-400 md:hidden block",
  },
  {
    to: "/register",
    text: "Register",
    className: "text-gray-400 md:hidden block",
  },
];
const NavBar = () => {
  const navigate = useNavigate();
  const [navRes, setNavRes] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [logos, setLogos] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const storedObject = JSON.parse(localStorage.getItem("myCart"));
    if (storedObject) {
      setNumOfProduct(storedObject.length);
      const total = storedObject.reduce((total, item) => {
        return total + item.currentPrice * item.number;
      }, 0);
      setTotalPrice(total.toFixed(1));
    }

    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/logo");
      result = await result.json();
      setLogos(result[result.length - 1].logo);

      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      let currentUrl = window.location.href;
      currentUrl = trimUrl(currentUrl);
      let result2 = await fetch(
        "https://psyrealestate.in/client/" + currentUrl
      );
      result2 = await result2.json();
      console.log(result2);
      if (result2.status == "0") {
        // console.log("ERROR");
        navigate("error");
      }
    };
    getFun();
  }, []);

  return (
    <div
      className="flex items-center justify-between  md:py-1 p-5 sm:px-8 lg:px-16
     bg-white/80 backdrop-blur-md sm:shadow-xl"
    >
      {/* {searchData ? (
        <div className="absolute z-[51] top-0 bottom-0 right-0 left-0 bg-white">
          <div className="bg-white p-16">
            <div className=" flex justify-between text-gray-700 font-thin cursor-pointer">
              <p>WHAT ARE YOU LOOKING FOR?  </p>
              <IoCloseOutline
                className="text-2xl text-gray-600"
                onClick={() => {
                  setSearchData(false);
                }}
              />
            </div>
            <div className="flex items-center justify-between text-2xl  border-b-[1px]">
              <input
                type="text"
                
                className={`placeholder:text-2xl border-0 focus:ring-0 focus:border-0   px-0 w-full `}
                placeholder="Search Products..."
              />
              <IoSearchOutline className="cursor-pointer" />
            </div>
          </div>
        </div>
      ) : null} */}
      <IoReorderThreeOutline
        className="cursor-pointer text-3xl md:hidden block"
        onClick={() => {
          setNavRes(!navRes);
        }}
      />
      <Link to={"/"}>
        {logos ? (
          <img
            src={`https://psyrealestate.in/${logos}`}
            alt="..."
            className="h-8 lg:h-12 xl:h-16"
          />
        ) : (
          ""
        )}
      </Link>
      <div
        className={`md:sticky absolute    md:left-auto left-0 top-0 bottom-0 right-0 z-50   ${
          navRes ? "flex" : "hidden md:block"
        } }`}
      >
        <ul
          className={`flex md:flex-row flex-col md:static h-screen md:bg-transparent bg-white  sm:gap-4 gap-7 md:gap-5 lg:gap-2 xl:gap-4 p-4  md:h-auto  md:w-auto w-[80%] md:items-center text-nowrap `}
        >
          <div className="md:hidden flex justify-between items-center  py-2 px-1 w-full bg-gray-100">
            <input
              type="text"
              placeholder="Search Products.."
              className="w-[70%] border-0 bg-gray-100 px-2"
            />
            <IoSearchOutline className="text-xl" />
          </div>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => {
                setNavRes(!navRes);
              }}
              className={item.className || ""}
            >
              <li
                // style={{}}
                style={
                  location.pathname == item.to
                    ? { backgroundColor: ApiColor }
                    : null
                }
                className={`text-base   shadow-sm  px-3
                 p-2 rounded-full hover:shadow-md hover:scale-105 transition-all duration-200 hover:shadow-gray-400
               sm:text-[12px] lg:text-[15px] xl:text-base ${
                 location.pathname == item.to
                   ? `  text-white shadow-md  scale-105 shadow-gray-600`
                   : null
               }`}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={() => {
            setNavRes(!navRes);
          }}
          className="  w-[20%] h-screen md:hidden block"
        ></div>
      </div>
      <div className="flex gap-6 relative select-none">
        <Link
          to={"/orders"}
          className="text-[10px] uppercase flex flex-col items-center"
        >
          <HiShoppingBag
            style={{ color: ApiColor }}
            className="text-2xl   cursor-pointer"
          />
          Order
        </Link>
        <p className="text-[10px]  uppercase flex flex-col items-center">
          <FaShoppingCart
            className="text-2xl pr-1 cursor-pointer"
            style={{ color: ApiColor }}
            onClick={() => {
              setShowCart(!showCart);
            }}
          />
          Cart
        </p>
        {showCart ? (
          <div className="absolute flex flex-col gap-5  top-11 z-50 p-5 shadow-lg shadow-black/30 rounded-md w-72 md:w-[350px] bg-white right-0">
            <p className="text-center text-gray-700 font-thin">
              {numOfProduct} products in the cart.
            </p>
            <hr />
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">Rs. {totalPrice}</p>
              </div>
              <p className="text-[12px] text-center text-gray-600 font-thin">
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <div>
              <Link
                to={"/add-to-cart"}
                onClick={() => {
                  setShowCart(!showCart);
                }}
              >
                <p
                  style={{ backgroundColor: ApiColor }}
                  className={`py-2 w-full text-white text-center  rounded-md hover:shadow-md hover:shadow-gray-400`}
                >
                  {" "}
                  CHECK OUT
                </p>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
