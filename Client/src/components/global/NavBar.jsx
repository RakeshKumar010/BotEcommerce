import  { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, useLocation} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
const baseUrl = import.meta.env.VITE_APP_URL;

const NavBar = () => { 
  const [navRes, setNavRes] = useState(false);
  const [navItemData, setNavItemData] = useState(false);
  const [showCart, setShowCart] = useState(false); 
  const [totalPrice, setTotalPrice] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(0);
  const location = useLocation();
  const navItems = [
    { to: "/", text: "HOME" },
    {
      to: "/" + (navItemData ? navItemData.nav1.replace(/\s+/g, "") : "menu1"),
      text: navItemData ? navItemData.nav1 : "menu 1",
    },
    {
      to: "/" + (navItemData ? navItemData.nav2.replace(/\s+/g, "") : "menu2"),
      text: navItemData ? navItemData.nav2 : "menu 2",
    },
    {
      to: "/" + (navItemData ? navItemData.nav3.replace(/\s+/g, "") : "menu3"),
      text: navItemData ? navItemData.nav3 : "menu 3",
    },
    {
      to: "/" + (navItemData ? navItemData.nav4.replace(/\s+/g, "") : "menu4"),
      text: navItemData ? navItemData.nav4 : "menu 4",
    },
    {
      to: "/" + (navItemData ? navItemData.nav5.replace(/\s+/g, "") : "menu5"),
      text: navItemData ? navItemData.nav5 : "menu 5",
    },
  ];
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
      let resultNavItem = await fetch(`${baseUrl}/nav-item`);
      resultNavItem = await resultNavItem.json();

      setNavItemData(resultNavItem.length > 0 ? resultNavItem[0] : false);
    };
    getFun();
 
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-between  md:py-1 p-5 sm:px-8 lg:px-16
     bg-white/80 backdrop-blur-md sm:shadow-xl"
      >
        <IoReorderThreeOutline
          className="cursor-pointer text-3xl md:hidden block"
          onClick={() => {
            setNavRes(!navRes);
          }}
        />
        <Link to={"/"}>
          <img
            src={
              "https://www.shareicon.net/download/2015/12/11/685818_global.svg"
            }
            alt="..."
            className="h-8 lg:h-12 xl:h-10"
          />
        </Link>
        <div
          className={`md:sticky absolute    md:left-auto left-0 top-0 bottom-0 right-0 z-50   ${
            navRes ? "flex" : "hidden md:block"
          } }`}
        >
          <ul
            className={`flex md:flex-row flex-col md:static h-screen md:bg-transparent bg-white  sm:gap-4 gap-7 md:gap-5 lg:gap-2 xl:gap-4 p-4  md:h-auto  md:w-auto w-[80%] md:items-center text-nowrap `}
          >
            <li className="md:hidden flex justify-between items-center  py-2 px-1 w-full  ">
              <Link to={"/"}>
                <img
                  src={
                    "https://www.shareicon.net/download/2015/12/11/685818_global.svg"
                  }
                  alt="..."
                  className="h-8 lg:h-12 xl:h-16"
                />
              </Link>
            </li>

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
                  style={
                    location.pathname == item.to
                      ? {
                          backgroundColor: "black",
                        }
                      : null
                  }
                  className={`text-base uppercase   shadow-sm  px-3
                 p-2 rounded-md  hover:shadow-md hover:scale-105 transition-all duration-200 hover:shadow-gray-400
               sm:text-[12px] lg:text-[15px] xl:text-base ${
                 location.pathname == item.to
                   ? `  text-white shadow-md   scale-105 shadow-gray-600`
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
              style={{ color: "black" }}
              className="text-2xl   cursor-pointer"
            />
            Order
          </Link>
          <p className="text-[10px]  uppercase flex flex-col items-center">
            <FaShoppingCart
              className="text-2xl pr-1 cursor-pointer"
              style={{ color: "black" }}
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
                    style={{ backgroundColor: "black" }}
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
    </>
  );
};

export default NavBar;
