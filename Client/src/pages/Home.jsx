import React from "react";
import Banner from "../components/Banner";
import NavBar from "../components/global/NavBar";
import HeaderTop from "../components/HeaderTop";
import ArrivalShow from "../components/ArrivalShow";
import BestSeller from "../components/BestSeller";
import FeatureBottom from "../components/FeatureBottom";
import Footer from "../components/global/Footer";

const Home = () => {
  return (
    <div>
      <HeaderTop/>
      <NavBar />
      <Banner />
      <ArrivalShow />
      <BestSeller/>
      <FeatureBottom/>
      <Footer/>
    </div>
  );
};

export default Home;
