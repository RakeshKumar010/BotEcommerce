import React, { useEffect, useState } from "react";
import { FaRecycle, FaSitemap, FaUserAlt } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { IoCash } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import DashBoardCard from "./DashBoardCard";
import { TfiLayoutSlider } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { ApiColor } from "../api/data";

const DashBoard = () => {
  const [product, setProduct] = useState();
  const [admin, setAdmin] = useState();
  const [coupon, setCoupon] = useState();
  const [carousel, setCarousel] = useState();
  const [isOldUer, setIsOldUser] = useState();

  const cardData = [
    {
      name: "Products",
      value: product,
      icon: <FaSitemap className="text-black text-2xl" />,
    },
    {
      name: "Admin",
      value: admin,
      icon: <MdAdminPanelSettings className="text-black text-2xl" />,
    },
    {
      name: "Visitors",
      value: 0,
      icon: <FaPeopleGroup className="text-black text-2xl" />,
    },
    {
      name: "Recycle Bin",
      value: 0,
      icon: <FaRecycle className="text-black text-2xl" />,
    },
    {
      name: "Total Orders",
      value: 0,
      icon: <FaCartShopping className="text-black text-2xl" />,
    },
    {
      name: "Cash on Delivery",
      value: 0,
      icon: <LiaShippingFastSolid className="text-black text-2xl" />,
    },
    {
      name: "Direct Payment",
      value: 0,
      icon: <IoCash className="text-black text-2xl" />,
    },
    {
      name: "User",
      value: 0,
      icon: <FaUserAlt className="text-black text-2xl" />,
    },
    {
      name: "Coupon",
      value: coupon,
      icon: <RiCoupon3Fill className="text-black text-2xl" />,
    },
    {
      name: "carousel",
      value: carousel,
      icon: <TfiLayoutSlider className="text-black text-2xl" />,
    },
  ];

  useEffect(() => {
    const getFun = async () => {

      let userString = localStorage.getItem("user");
      let user = JSON.parse(userString);

      let result1 = await fetch("https://psyrealestate.in/product");
      result1 = await result1.json();
      let filteredResults1 = result1.filter(
        (value) => value.clientId == user._id
      );

      setProduct(filteredResults1.length);

      let result2 = await fetch("https://psyrealestate.in/coupon");
      result2 = await result2.json();
      let filteredResults2 = result2.filter(
        (value) => value.clientId == user._id
      );
      setCoupon(filteredResults2.length);

      let result3 = await fetch("https://psyrealestate.in/show-client");
      result3 = await result3.json();
      let filteredResults3 = result3.filter(
        (value) => value.clientId == user._id
      );
      setAdmin(filteredResults3.length);

    
      result3.map((value) => {
        // console.log(value.clientId);
        if (value.email == user.email) {
          if (value.clientId == user._id) {
            setIsOldUser(true);
          } else {
            setIsOldUser(false);
          }
        }
      });

      let result4 = await fetch("https://psyrealestate.in/carousel");
      result4 = await result4.json();
      let filteredResults4 = result4.filter(
        (value) => value.clientId == user._id
      );
      setCarousel(filteredResults4.length);
    };
    getFun();
  }, []);
  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      {isOldUer ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {cardData.map((card, index) => (
            <DashBoardCard
              key={index}
              name={card.name}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  h-screen gap-5">
          <p className="text-3xl text-center font-bold">
            Complate Your Profile
          </p>
          <Link
            to={"add-logo"}
            style={ApiColor?{backgroundColor:ApiColor}:{backgroundColor:'black'}}
            className="  text-white p-2 transition-all px-10 rounded-md shadow-md hover:scale-105"
          >
            Get Start
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
