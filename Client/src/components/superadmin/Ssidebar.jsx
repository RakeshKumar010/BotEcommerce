import { MdLogout, MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaRegUser,
  FaSortDown,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { ApiColor } from "../api/data";
import Superadminlogo from "../../assets/image/superadminlogo.png";
import { useState } from "react";
const Ssidebar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [clientTab, setClientTab] = useState(false);

  const links = [
    {
      to: "/super-admin",
      text: "Dashboard",
      icon: <MdOutlineDashboardCustomize className="text-xl" />,
    },
  ];
  const bgHover = `bg-[${ApiColor}]`;
  return (
    <>
      <button
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`fixed  left-0 z-40 w-60 h-screen transition-transform mt-1 ${
          navOpen ? "-translate-x-full" : "translate-x-0 "
        } lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium select-none">
            <Link to={"/admin"}>
              <img src={Superadminlogo} alt="..." className="h-14   " />
            </Link>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  onClick={link.onClick}
                >
                  {link.icon}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}

            <li>
              <p
                className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                onClick={() => {
                  setClientTab(!clientTab);
                }}
              >
                <FaRegUser className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
                <FaSortDown />
              </p>
              {clientTab ? (
                <div className="p-2   bg-gray-200 rounded-lg">
                  <Link
                    to={"all-client"}
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <FaUserFriends className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      All Client
                    </span>
                  </Link>
                  <Link
                    to={"add-client"}
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <FaUserPlus className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Client
                    </span>
                  </Link>
                </div>
              ) : null}
            </li>

            {/* <li>
              <p
                className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                onClick={() => {
                  setProductTab(!productTab);
                }}
              >
                <MdProductionQuantityLimits className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                <FaSortDown />
              </p>
              {productTab ? (
                <div className="p-2   bg-gray-200 rounded-lg">
                  <Link
                    to={"product"}
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <MdProductionQuantityLimits className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Products
                    </span>
                  </Link>
                 
                    <Link
                      to={"add-products"}
                      className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                    >
                      <MdAddChart className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Products
                      </span>
                    </Link>
              
                </div>
              ) : null}
            </li>

            <li>
              <p
                className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                onClick={() => {
                  setCouponTab(!couponTab);
                }}
              >
                <RiCoupon2Line className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Coupon</span>
                <FaSortDown />
              </p>
              {couponTab ? (
                <div className="p-2   bg-gray-200 rounded-lg">
                  <Link
                    to={"coupon"}
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <RiCoupon2Line className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Coupon
                    </span>
                  </Link>
        
                    <Link
                      to={"add-coupon"}
                      className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                    >
                      <MdOutlineAddPhotoAlternate className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Coupon
                      </span>
                    </Link>
    
                </div>
              ) : null}
            </li>

            <li>
              <p
                className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                onClick={() => {
                  setCarouselTab(!carouselTab);
                }}
              >
                <TfiLayoutSlider className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">carousel</span>
                <FaSortDown />
              </p>
              {carouselTab ? (
                <div className="p-2   bg-gray-200 rounded-lg">
                  <Link
                    to={"carousel"}
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <TfiLayoutSlider className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      carousel
                    </span>
                  </Link>
          
                    <Link
                      to={"add-carousel"}
                      className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                    >
                      <TfiLayoutSliderAlt className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add carousel
                      </span>
                    </Link>
             
                </div>
              ) : null}
            </li> */}

            <li>
              <Link
                to={"/"}
                className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                onClick={() => {
                  localStorage.removeItem("superadmin");
                }}
              >
                <MdLogout className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Ssidebar;
