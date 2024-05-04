import React, { useState } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/global/NavBar";
import HeaderTop from "../components/HeaderTop";
import ArrivalShow from "../components/ArrivalShow";
import BestSeller from "../components/BestSeller";
import FeatureBottom from "../components/FeatureBottom";
import Footer from "../components/global/Footer";
import DreshList from "../components/DreshList";
import ProDetailsPopup from "../components/ProDetailsPopup";

const Home = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [addId, setAddId] = useState(false);
  let screenWidth = window.innerWidth;
  return (
    <>
      {detailsPopup ? (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      ) : null}
      {screenWidth > 1021 ? (
        <>
         
          <HeaderTop />
          <NavBar />
          <Banner />
        </>
      ) : null}

      <div className="lg:static sticky top-0 z-10 block  lg:hidden bg-white pb-2 shadow-xl ">
        <HeaderTop />
        <NavBar />
        <Banner />
      </div>
      <DreshList />
      <ArrivalShow setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <BestSeller setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <FeatureBottom />
      <Footer />
    </>
  );
};

export default Home;
