import React, { useEffect, useState } from "react";
import { IoColorPaletteOutline, IoTrailSignOutline } from "react-icons/io5";
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
import { FaLock, FaRegUser, FaSortDown } from "react-icons/fa";
import { LuRecycle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiCoupon2Line } from "react-icons/ri";
import { BsMenuButtonWide } from "react-icons/bs";
import { SlSocialDropbox } from "react-icons/sl";
import { ApiColor } from "../api/data";

const SideBar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [sAdminId, setSAdminId] = useState();
  const [access, setAccess] = useState("");
  const [logos, setLogos] = useState();
  const [accountTab, setAccountTab] = useState(false);
  const [productTab, setProductTab] = useState(false);
  const [couponTab, setCouponTab] = useState(false);
  const [carouselTab, setCarouselTab] = useState(false);
  const [isOldUer, setIsOldUser] = useState();
  const [loginUser, setLoginUser] = useState();

  const [navColor, setNavColor] = useState();
  const [navItem, setNavItem] = useState();
  const [navSocial, setNavSocial] = useState();
  const [navAccount, setNavAccount] = useState();

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://psyrealestate.in/admins");
      result = await result.json();

      setNavColor(localStorage.getItem("color"));
      setNavItem(localStorage.getItem("nav"));
      setNavSocial(localStorage.getItem("social"));
      setNavAccount(localStorage.getItem("account"));

      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);
      setLoginUser(user.name.split(" ")[0]);
      result.map((value) => {
        if (value.email == user.email) {
          if (value.clientId == user._id) {
            setSAdminId(value.sAdmin);
            setAccess(value);
            setIsOldUser(true);
          } else {
            setIsOldUser(false);
          }
        }
      });

      let result3 = await fetch("https://psyrealestate.in/logo");
      result3 = await result3.json();
      const filteredResults = result3.filter(
        (value) => value.clientId === user._id
      );
      filteredResults.length > 0
        ? setLogos(filteredResults[0].logo)
        : setLogos(null);

      let resultColor = await fetch("https://psyrealestate.in/color");
      resultColor = await resultColor.json();
      const filteredResultColor = resultColor.filter(
        (value) => value.clientId === user._id
      );
      filteredResultColor.length > 0
        ? setNavColor(filteredResultColor[0].color)
        : setNavColor(null);

      let resultNavItem = await fetch("https://psyrealestate.in/nav-item");
      resultNavItem = await resultNavItem.json();
      const filteredResultNavItem = resultNavItem.filter(
        (value) => value.clientId === user._id
      );
      filteredResultNavItem.length > 0
        ? setNavItem(true)
        : setNavItem(false);
      let resultSocialLink = await fetch("https://psyrealestate.in/social");
      resultSocialLink = await resultSocialLink.json();
      const filteredResultSocialLink = resultSocialLink.filter(
        (value) => value.clientId === user._id
      );
      filteredResultSocialLink.length > 0
        ? setNavSocial(true)
        : setNavSocial(false);
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
    ...(sAdminId == "1"
      ? [
          {
            to: "add-color",
            text: "Add Color",
            icon: <IoColorPaletteOutline className="text-xl" />,
          },
        ]
      : []),
    ...(sAdminId == "1"
      ? [
          {
            to: "add-nav-item",
            text: "Add Nav Item",
            icon: <BsMenuButtonWide className="text-xl" />,
          },
        ]
      : []),
    ...(sAdminId == "1"
      ? [
          {
            to: "add-social-link",
            text: "Add Social Link",
            icon: <SlSocialDropbox className="text-xl" />,
          },
        ]
      : []),
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

      {isOldUer ? (
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
                    src={`https://psyrealestate.in/${logos}`}
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
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                    onClick={() => {
                      setAccountTab(!accountTab);
                    }}
                  >
                    <FaRegUser className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Account
                    </span>
                    <FaSortDown />
                  </p>
                  {accountTab ? (
                    <div className="p-2   bg-gray-200 rounded-lg">
                      <Link
                        to={"account"}
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                      >
                        <FaRegUser className="text-xl" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Account
                        </span>
                      </Link>
                      <Link
                        to={"sign-up"}
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                      >
                        <IoTrailSignOutline className="text-xl" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Add Account
                        </span>
                      </Link>
                      <Link
                        to={"recycle-bin"}
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
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
                  className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                  onClick={() => {
                    setProductTab(!productTab);
                  }}
                >
                  <MdProductionQuantityLimits className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
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
                    {access.addProduct == "yes" ? (
                      <Link
                        to={"add-products"}
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
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
                    {access.addCoupon == "yes" ? (
                      <Link
                        to={"add-coupon"}
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
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
                    className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
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
                        className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                      >
                        <TfiLayoutSlider className="text-xl" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          carousel
                        </span>
                      </Link>
                      {access.addCoupon == "yes" ? (
                        <Link
                          to={"add-carousel"}
                          className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
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
                  className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                  onClick={() => {
                    localStorage.removeItem("user");
                  }}
                >
                  <MdLogout className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Logout ({loginUser})
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : (
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
                    src={`https://psyrealestate.in/${logos}`}
                    alt="..."
                    className="h-14  lg:h-20"
                  />
                ) : (
                  <li>
                    <Link
                      to="/admin"
                      className="flex items-center   text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                    >
                      <span className="flex-1 ms-3 font-bold text-3xl whitespace-nowrap">
                        Logo
                      </span>
                    </Link>
                  </li>
                )}
              </Link>
              <li>
                <Link
                  to="/admin"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                >
                  <MdOutlineDashboardCustomize />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="add-logo"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                >
                  <IoMdAddCircleOutline />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Add Logo{" "}
                  </span>
                </Link>
              </li>
              <li>
                {logos ? (
                  <Link
                    to="add-color"
                    className="flex items-center p-2   text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  >
                    <IoColorPaletteOutline />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Color{" "}
                    </span>
                  </Link>
                ) : (
                  <Link className="flex items-center p-2 bg-gray-300 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group">
                    <IoColorPaletteOutline />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Color{" "}
                    </span>
                    <FaLock />
                  </Link>
                )}
              </li>
              <li>
                {navColor? (
                  <Link    to="add-nav-item" className="flex items-center p-2  text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group">
                    <BsMenuButtonWide />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Nav Item{" "}
                    </span>
                  </Link>
                ) : (
                  <Link
                 
                    className="flex items-center bg-gray-300 p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  >
                    <BsMenuButtonWide />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Nav Item{" "}
                    </span>
                    <FaLock />

                  </Link>
                )}
              </li>
              <li>
                {navItem? (
                  <Link   to="add-social-link" className="flex items-center  p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group">
                    <SlSocialDropbox />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Social Link{" "}
                    </span>
                  </Link>
                ) : (
                  <Link
                  
                    className="flex items-center p-2 bg-gray-300 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group"
                  >
                    <SlSocialDropbox />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Social Link{" "}
                    </span>
                    <FaLock />

                  </Link>
                )}
              </li>

              <li>
                {navSocial? (
                  <Link
                  to={"sign-up"}
                    className={`flex hover:${bgHover}  items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <IoTrailSignOutline className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Account
                    </span>
                  </Link>
                ) : (
                  <Link
                 
                    className={`flex hover:${bgHover} bg-gray-300    items-center p-2 text-gray-900 rounded-lg  hover:shadow-md  transition-all duration-200  group`}
                  >
                    <IoTrailSignOutline className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Account
                    </span>
                    <FaLock />

                  </Link>
                )}
              </li>
              <li>
                <Link
                  to={"/"}
                  className={`flex hover:${bgHover}   items-center p-2 text-gray-900 rounded-lg  hover:shadow-md hover:scale-105 transition-all duration-200  group`}
                  onClick={() => {
                    localStorage.removeItem("user");
                  }}
                >
                  <MdLogout className="text-xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Logout ({loginUser})
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;
