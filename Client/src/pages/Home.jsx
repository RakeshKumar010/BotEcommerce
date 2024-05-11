import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/global/NavBar";
import HeaderTop from "../components/HeaderTop";
import ArrivalShow from "../components/ArrivalShow";
import BestSeller from "../components/BestSeller";
import FeatureBottom from "../components/FeatureBottom";
import Footer from "../components/global/Footer";
import DreshList from "../components/DreshList";
import ProDetailsPopup from "../components/ProDetailsPopup";
import OfferImg from "../assets/image/offerImg.jpg";
import { IoCloseCircleOutline } from "react-icons/io5";

const Home = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [addId, setAddId] = useState(false);
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
    }, 10000);
  }, []);
  let screenWidth = window.innerWidth;
  return (
    <>
      {detailsPopup ? (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      ) : null}

      <div id="nav-desktop" >
        <div className="fixed top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
        </div>
        <div className="mt-28">
        <Banner />
        </div>
      </div>

      <div className=" sticky top-0 z-10 block  sm:hidden md:bg-gray-200 bg-white pb-2 shadow-xl ">
        <HeaderTop />
        <NavBar />
        {/* <Banner /> */}
      </div>
      <DreshList />
      <ArrivalShow setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <BestSeller setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <FeatureBottom />
      <Footer />
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

export default Home;
