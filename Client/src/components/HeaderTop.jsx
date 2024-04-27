import { useEffect, useState } from "react";
import OfferImg from "../assets/image/offerImg.jpg";
import { IoCloseCircleOutline } from "react-icons/io5";

const HeaderTop = () => {
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className=" bg-uiColor  text-white flex px-8 p-2 uppercase">
        <p className="header-top-animation text-sm"> 🌟 50% OFF SALE! 🌟 </p>
      </div>
      {popUp ? (
        <div className="fixed flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-black/50 z-[100]">
          <IoCloseCircleOutline
            onClick={() => {
              setPopUp(false);
            }}
            className="text-white text-5xl cursor-pointer"
          />
          <img
            src={OfferImg}
            alt="..."
            className="md:w-1/2 w-full rounded-md shadow-md"
          />
        </div>
      ) : null}
    </>
  );
};

export default HeaderTop;
