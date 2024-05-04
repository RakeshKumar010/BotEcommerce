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

const Home = () => {
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [addId, setAddId] = useState(false);

  return (
    <>
      <>
        {detailsPopup ? (
          <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
        ) : null}
        <HeaderTop />
        <NavBar />
        <Banner />
      </>
      <DreshList />
      <ArrivalShow setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <BestSeller setAddId={setAddId} setDetailsPopup={setDetailsPopup} />
      <FeatureBottom />
      <Footer />
    </>
  );
};

export default Home;
