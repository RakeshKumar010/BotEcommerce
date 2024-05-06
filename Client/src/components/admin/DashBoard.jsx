import React from "react";
import { FaRecycle, FaSitemap, FaUserAlt } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { IoCash } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import DashBoardCard from "./DashBoardCard";

const cardData = [
  { name: "Products", value: 8, icon: <FaSitemap className="text-black text-2xl" /> },
  { name: "Admin", value: 2, icon: <MdAdminPanelSettings className="text-black text-2xl" /> },
  { name: "Visitors", value: 0, icon: <FaPeopleGroup className="text-black text-2xl" /> },
  { name: "Recycle Bin", value: 0, icon: <FaRecycle className="text-black text-2xl" /> },
  { name: "Total Orders", value: 0, icon: <FaCartShopping className="text-black text-2xl" /> },
  { name: "Cash on Delivery", value: 0, icon: <LiaShippingFastSolid className="text-black text-2xl" /> },
  { name: "Direct Payment", value: 0, icon: <IoCash className="text-black text-2xl" /> },
  { name: "User", value: 0, icon: <FaUserAlt className="text-black text-2xl" /> },
  { name: "Coupon", value: 0, icon: <RiCoupon3Fill className="text-black text-2xl" /> }
];

const DashBoard = () => {
  return (
    <div className="absolute right-0 border-dotted border-black border-2 min-h-screen w-full lg:w-[82%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        {cardData.map((card, index) => (
          <DashBoardCard key={index} name={card.name} value={card.value} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
