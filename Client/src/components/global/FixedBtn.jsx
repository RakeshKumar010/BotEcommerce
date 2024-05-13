import React, { useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import OfferImg from "../../assets/image/offerImg.jpg";

const FixedBtn = () => {
  const [offerImg, setOfferImg] = useState(false);
  return (
    <div className="fixed flex justify-center items-center  top-1/2 -right-24 z-50 ">
      {offerImg ? (
        <div
          style={{
            background: `url(${OfferImg}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="h-60 absolute right-32 w-[50vw]"
        >
          {" "}
        </div>
      ) : null}
      <div
        className="flex gap-9 select-none -rotate-90 cursor-pointer items-center px-8 py-1 bg-gray-700  text-white"
        onClick={() => {
          setOfferImg(!offerImg);
        }}
      >
        <p className="">FLAT ₹200 OFF</p>
        <RiArrowUpSFill className="text-4xl" />
      </div>
    </div>
  );
};

export default FixedBtn;
