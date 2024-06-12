import React from "react";
import { ApiColor } from "../api/data";

const DashBoardCard = ({ name, value, icon }) => {
  const borderColor=`border-[${ApiColor}]/10`
  return (
    <div style={{backgroundColor:ApiColor}} className={`  hover:scale-105 transition-all dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 ${borderColor} dark:border-gray-600 text-white font-medium group`}>
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        {icon}
      </div>
      <div className="text-right">
        <p className="text-2xl">{value}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default DashBoardCard;
