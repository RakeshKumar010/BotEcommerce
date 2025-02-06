import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/global/NavBar";
import HeaderTop from "../components/HeaderTop";
import ArrivalShow from "../components/ArrivalShow";
import BestSeller from "../components/BestSeller";
import FeatureBottom from "../components/FeatureBottom";
import Footer from "../components/global/Footer";
import ProDetailsPopup from "../components/ProDetailsPopup";
import { IoCloseCircleOutline } from "react-icons/io5";
import FixedBtn from "../components/global/FixedBtn";
const baseUrl = import.meta.env.VITE_APP_URL;

const Home = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [addId, setAddId] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [data, setData] = useState();
  const [couponData, setCouponData] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setPopUp(true);
    }, 10000); 

    const getFun = async () => {
      let result = await fetch(`${baseUrl}/carousel`);
      result = await result.json();

      if (result.length > 0) {
        setData(result);
      } else {
        setData(null);
      }

      let couponresult = await fetch(`${baseUrl}/coupon`);
      couponresult = await couponresult.json();

      if (couponresult.length > 0) {
        const reversedCoupons = couponresult.reverse();
        setCouponData(reversedCoupons[0].discount); 
      } else {
        setCouponData("5%");
      }
    };
    getFun();
  }, []);

  return (
    <>
      <FixedBtn couponData={couponData} data={data} />
  

      <div className="fixed top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="mt-28">
        <Banner data={data} />
      </div>

      <ArrivalShow setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <BestSeller setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <FeatureBottom />
      <Footer />
      
      {detailsPopup ? (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      ) : null}
      {popUp ? (
        <div className="fixed flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-black/30 p-3 md:p-0 backdrop-blur-sm  z-10">
          <IoCloseCircleOutline
            onClick={() => {
              setPopUp(false);
            }}
            className="text-white text-5xl cursor-pointer"
          />
          <img
            src={
              data
                ? `${data[0].carousel}`
                : "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg"
            }
            alt="..."
            className="md:w-1/2 w-full rounded-md shadow-md"
          />
        </div>
      ) : null}
    </>
  );
};

export default Home;
