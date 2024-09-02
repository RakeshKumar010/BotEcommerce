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
import { IoCloseCircleOutline } from "react-icons/io5";
import FixedBtn from "../components/global/FixedBtn";

const Home = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [addId, setAddId] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [data, setData] = useState();
  const [couponData,setCouponData]=useState()
  // const [banner, setbanner] = useState();

  const dummyData = [
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },

    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setPopUp(true);
    }, 10000);
    // trim url

    const getFun = async () => {
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "http://localhost:4001/client/" + currentUrl
      );
      const clientData = await response.json();

      let result = await fetch("http://localhost:4001/carousel");
      result = await result.json();

      const filterResult = result.filter((value) => {
        return value.clientId == clientData._id;
      });

      if (filterResult.length > 0) {
        setData(filterResult);
        // console.log(filterResult);
      } else {
        setData(null);
      }

      
      let couponresult = await fetch("http://localhost:4001/coupon");
      couponresult = await couponresult.json();
      
      const filterCoupan = couponresult.filter((value) => {
        return value.clientId == clientData._id;
      });
      if(filterCoupan.length>0){

        const reversedCoupons = filterCoupan.reverse();
        setCouponData(reversedCoupons[0].discount);
        // console.log(reversedCoupons[0].discount);
      }else{
        setCouponData('5%')
      }

      // let bannerResult = await fetch("http://localhost:4001/banner");
      // bannerResult = await bannerResult.json();
      // // console.log(bannerResult);
      // const filterbannerResult = bannerResult.filter((value) => {
      //   return value.clientId == clientData._id;
      // });
      // // console.log(filterbannerResult[0].banner);
      // if (filterbannerResult.length > 0) {
      //   setbanner(filterbannerResult[0].banner);
      //   // console.log(filterbannerResult[0].banner);
      // } else {
      //   setbanner(null);
      // }
    };
    getFun();
  }, []);

  return (
    <>
      <FixedBtn couponData={couponData} data={data} />
      {detailsPopup ? (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      ) : null}

      <div className="fixed top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="mt-28">
        <Banner data={data} dummyData={dummyData} />
      </div>

      {/* <div className=" sticky top-0 z-10 block  sm:hidden md:bg-gray-200 bg-white pb-2 shadow-xl ">
        <HeaderTop />
        <NavBar />
      </div> */}
      {/* <DreshList banner={banner} /> */}
      <ArrivalShow setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <BestSeller setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <FeatureBottom />
      <Footer />
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
                ? `http://localhost:4001/${data[0].carousel}`
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
