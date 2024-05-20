import React, { useEffect, useState } from "react";
import { IoTrailSignOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  MdAddChart,
  MdLogout,
  MdOutlineAddPhotoAlternate,
  MdOutlineDashboardCustomize,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { TfiLayoutSlider } from "react-icons/tfi";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { LuRecycle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";

const SideBar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [sAdminId, setSAdminId] = useState();
  const [access, setAccess] = useState("");
  const [logos, setLogos] = useState(false);
  const [accountTab, setAccountTab] = useState(false);
  const [productTab, setProductTab] = useState(false);
  const [couponTab, setCouponTab] = useState(false);
  const [carouselTab, setCarouselTab] = useState(false);

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://65.2.144.134:3000/admins");
      result = await result.json();
      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);
      result.map((value) => {
        if (value.email == user.email) {
          setSAdminId(value.sAdmin);
        }
      });
      let result2 = await fetch("http://65.2.144.134:3000/admins");
      result2 = await result2.json();
      result2.map((value) => {
        if (value.email == user.email) {
          setAccess(value);
        }
      });
      let result3 = await fetch("http://65.2.144.134:3000/add-logo");
      result3 = await result3.json();
      setLogos(result3[result3.length - 1].logo);
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
            to: "add-logo",
            text: "Add Logo",
            icon: <IoMdAddCircleOutline className="text-xl" />,
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
          <ul className="space-y-2 font-medium select-none">
            <Link to={"/admin"}>
              {logos ? (
                <img
                  src={`http://65.2.144.134:3000/${logos}`}
                  alt="..."
                  className="h-14  lg:h-20"
                />
              ) : (
                ""
              )}
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
            {sAdminId == "1" ? (
              <li>
                <p
                  className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  onClick={() => {
                    setAccountTab(!accountTab);
                  }}
                >
                  <FaRegUser className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Account</span>
                  <FaSortDown />
                </p>
                {accountTab ? (
                  <div className="p-2   bg-gray-200 rounded-lg">
                    <Link
                      to={"account"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <FaRegUser className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Account
                      </span>
                    </Link>
                    <Link
                      to={"sign-up"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <IoTrailSignOutline className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Account
                      </span>
                    </Link>
                    <Link
                      to={"recycle-bin"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <LuRecycle className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Recycle Bin
                      </span>
                    </Link>
                  </div>
                ) : null}
              </li>
            ) : null}

            <li>
              <p
                className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
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
                    className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                  >
                    <MdProductionQuantityLimits className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Products
                    </span>
                  </Link>
                  {access.addProduct == "yes" ? (
                    <Link
                      to={"add-products"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <MdAddChart className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Products
                      </span>
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </li>

            <li>
              <p
                className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
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
                    className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                  >
                    <RiCoupon2Line className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Coupon
                    </span>
                  </Link>
                  {access.addCoupon == "yes" ? (
                    <Link
                      to={"add-coupon"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <MdOutlineAddPhotoAlternate className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Add Coupon
                      </span>
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </li>
            {sAdminId == "1" ? (
              <li>
                <p
                  className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  onClick={() => {
                    setCarouselTab(!carouselTab);
                  }}
                >
                  <TfiLayoutSlider className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    carousel
                  </span>
                  <FaSortDown />
                </p>
                {carouselTab ? (
                  <div className="p-2   bg-gray-200 rounded-lg">
                    <Link
                      to={"carousel"}
                      className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                    >
                      <TfiLayoutSlider className="text-xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        carousel
                      </span>
                    </Link>
                    {access.addCoupon == "yes" ? (
                      <Link
                        to={"add-carousel"}
                        className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group"
                      >
                        <TfiLayoutSliderAlt className="text-xl" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Add carousel
                        </span>
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </li>
            ) : null}

            <li>
              <Link
                to={"/"}
                className="flex hover:bg-[#9d4253] hover:text-white items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                onClick={() => {
                  localStorage.removeItem('user');
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
