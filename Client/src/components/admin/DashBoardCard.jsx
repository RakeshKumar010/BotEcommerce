import React from "react";

const DashBoardCard = ({ name, value, icon }) => {
  return (
    <div className="bg-teal-400 hover:scale-105 transition-all dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-teal-600 dark:border-gray-600 text-white font-medium group">
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
