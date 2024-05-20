import React, { useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import OfferImg from "../../assets/image/offerImg.jpg";

const FixedBtn = ({data}) => {
  const [offerImg, setOfferImg] = useState(false);
  return (
    <div className="fixed flex justify-center items-center  top-1/2 -right-[102px] z-50 ">
      {offerImg ? (
        <div
          style={{
            background: `url(${data?`http://65.2.144.134:3000/${data[4].carousel}`:OfferImg}) no-repeat center center`,
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
        <p className="">FLAT 50% OFF</p>
        <RiArrowUpSFill className="text-4xl" />
      </div>
    </div>
  );
};

export default FixedBtn;
