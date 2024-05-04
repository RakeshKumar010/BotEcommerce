import React, { useState } from "react";
import { IoTrailSignOutline } from "react-icons/io5";
import { MdAddChart, MdLogout, MdOutlineAddPhotoAlternate, MdOutlineDashboardCustomize, MdProductionQuantityLimits } from "react-icons/md";
import { LuRecycle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";

const SideBar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const links = [
    { to: "/admin", text: "Dashboard", icon: <MdOutlineDashboardCustomize className="text-xl" /> },
    { to: "product", text: "Products", icon: <MdProductionQuantityLimits className="text-xl" /> },
    {
      to: "add-products",
      text: "Add Products",
      icon: <MdAddChart className="text-xl" />,
    },
    { to: "add-coupon", text: "Add Coupon", icon: <MdOutlineAddPhotoAlternate className="text-xl" /> },
    { to: "coupon", text: "Coupon", icon: <RiCoupon2Line className="text-xl" /> },
    { to: "recycle-bin", text: "Recycle Bin", icon: <LuRecycle className="text-xl" /> },
    { to: "sign-up", text: "Sign Up", icon: <IoTrailSignOutline className="text-xl" /> },
    {
      to: "/",
      text: "Logout",
      icon: <MdLogout className="text-xl" />,
      onClick: () => {
        // Clear all data from local storage
        localStorage.clear();
        // Set isAdmin to false
        setIsAdmin(false);
      },
    },
  ];
  return (
    <>
      <button
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
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
        className={`fixed  left-0 z-40 w-64 h-screen transition-transform mt-1 ${
          navOpen ? "-translate-x-full" : "translate-x-0 "
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                  onClick={link.onClick}
                >
                  {link.icon}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
