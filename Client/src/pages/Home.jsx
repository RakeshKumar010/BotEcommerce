import React from "react";
import Banner from "../components/Banner";
import ShowCatg from "../components/ShowCatg";
import NavBar from "../components/global/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ShowCatg />
    </div>
  );
};

export default Home;
