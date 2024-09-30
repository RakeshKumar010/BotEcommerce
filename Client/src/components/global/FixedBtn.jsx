import React, { useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
 

const FixedBtn = ({data,couponData}) => {
  const [offerImg, setOfferImg] = useState(false);
  return (
    <div className="fixed flex justify-center items-center  top-1/2 -right-[102px] z-10 ">
      {offerImg ? (
        <div
          style={{
            background: `url(${data?`${data[2].carousel}`:"https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg"}) no-repeat center center`,
            // background: `url(${data?'OfferImg':OfferImg}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="h-60 absolute shadow-lg  right-32 w-[90vw] md:w-[50vw]"
        >
          {" "}
        </div>
      ) : null}
      <div
        className="flex gap-9 select-none -rotate-90 cursor-pointer items-center px-9 py-1 bg-gray-700  text-white"
        onClick={() => {
          setOfferImg(!offerImg);
        }}
      >
        <p className="">FLAT {couponData} OFF</p>
        <RiArrowUpSFill className="text-4xl" />
      </div>
    </div>
  );
};

export default FixedBtn;
