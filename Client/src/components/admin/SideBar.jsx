import React, { useEffect, useState } from "react";
import { IoTrailSignOutline } from "react-icons/io5";
import {  IoMdAddCircleOutline } from "react-icons/io";
import {
  MdAddChart,
  MdLogout,
  MdOutlineAddPhotoAlternate,
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { LuRecycle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";

const SideBar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [sAdminId, setSAdminId] = useState();
  const [access, setAccess] = useState("");
  const [logos,setLogos]=useState(false)

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/admins");
      result = await result.json();
      result.map((value) => {
        if (value.email == localStorage.getItem("email")) {
          setSAdminId(value.sAdmin);
        }
      });
      let result2 = await fetch("https://botecommerce.onrender.com/admins");
      result2 = await result2.json();
      result2.map((value) => {
        if (value.email == localStorage.getItem("email")) {
          setAccess(value);
       
        }
      });

      let result3=await fetch("https://botecommerce.onrender.com/add-logo")
      result3 =await result3.json()
      setLogos(result3[result3.length - 1].logo)
  
    };
    getFun();
  }, []);

  const links = [
    {
      to: "/admin",
      text: "Dashboard",
      icon: <MdOutlineDashboardCustomize className="text-xl" />,
    },

    ...(sAdminId == "1"
      ? [
          {
            to: "account",
            text: "Account",
            icon: <FaRegUser className="text-xl" />,
          },
        ]
      : []),
    {
      to: "product",
      text: "Products",
      icon: <MdProductionQuantityLimits className="text-xl" />,
    },
    {
      to: "coupon",
      text: "Coupon",
      icon: <RiCoupon2Line className="text-xl" />,
    },
    ...(sAdminId == "1"
      ? [
          {
            to: "sign-up",
            text: "Add Account",
            icon: <IoTrailSignOutline className="text-xl" />,
          },
        ]
      : []),
    ...(access.addProduct == "yes"
      ? [
          {
            to: "add-products",
            text: "Add Products",
            icon: <MdAddChart className="text-xl" />,
          },
        ]
      : []),
    ...(access.addCoupon == "yes"
      ? [
          {
            to: "add-coupon",
            text: "Add Coupon",
            icon: <MdOutlineAddPhotoAlternate className="text-xl" />,
          },
        ]
      : []),

    ...(sAdminId == "1"
      ? [
          {
            to: "recycle-bin",
            text: "Recycle Bin",
            icon: <LuRecycle className="text-xl" />,
          },
        ]
      : []),
    ...(sAdminId == "1"
      ? [
          {
            to: "add-logo",
            text: "Add Logo",
            icon: <IoMdAddCircleOutline className="text-xl" />,
          },
        ]
      : []),
      ...(sAdminId == "1"
      ? [
          {
            to: "add-carousel ",
            text: "Add Carousel ",
            icon: <TfiLayoutSliderAlt className="text-xl" />,
          },
        ]
      : []),
  ];
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
          <ul className="space-y-2 font-medium">
            <Link to={"/admin"}>
              {logos?<img
                src={`https://botecommerce.onrender.com/${logos}`}
                alt="..."
                className="h-14  lg:h-20"
              />:''}
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
              <Link
                to={"/"}
                className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                onClick={() => {
                  localStorage.clear();
                  setIsAdmin(false);
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

export default SideBar;
