import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { ApiColor } from "./api/data";
import DummyCard from "./DummyCard";

const ArrivalShow = ({ setDetailsPopup, setAddId }) => {
  const [data, setData] = useState();
  const [navItemData, setNavItemData] = useState(false);
  useEffect(() => {
    const getFun = async () => {
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "https://ecserver.estatebot.in/client/" + currentUrl
      );
      const clientData = await response.json();
    

      let resultNavItem = await fetch("https://ecserver.estatebot.in/nav-item");
      resultNavItem = await resultNavItem.json();

      const filteredResultNavItems = resultNavItem.filter((value) => {
        return value.clientId == clientData._id;
      });
    
      setNavItemData(
        filteredResultNavItems.length > 0 ? filteredResultNavItems[0] : false
      );
      const navItemInner =
        filteredResultNavItems.length > 0 ? filteredResultNavItems[0] : false;
      let result = await fetch("https://ecserver.estatebot.in/product");
      result = await result.json();
      let array = [];
      result.map((value) => {
        if (
          (navItemInner
            ? navItemInner.nav1.replace(/\s+/g, "")
            : "menu1"
          ).toUpperCase() == value.section.toUpperCase()
        ) {
          array.push(value);
        }
        array.length > 0 ? setData(array) : setData(null);
      });
    };
    getFun();
  }, []);
  //
  return (
    <div className="md:p-10 p-0 ">
      <div className="text-center py-5 flex flex-col justify-center items-center ">
        <Link
          to={navItemData ? navItemData.nav1.replace(/\s+/g, "") : "menu1"}
          className="font-semibold uppercase text-lg md:text-2xl"
        >
          {navItemData ? navItemData.nav1 : "section 1"}
        </Link>
        <p className="">
          Sustain your wardrobe with our best selling products.
        </p>
        <div className="flex items-center my-5 justify-center ">
          <Link
            to={navItemData ? navItemData.nav1.replace(/\s+/g, "") : "menu1"}
            style={
              ApiColor
                ? { backgroundColor: ApiColor }
                : { backgroundColor: "black" }
            }
            className={`flex items-center   text-white p-2 md:w-[40vw] w-[60vw]  justify-center rounded-full hover:scale-105 hover:shadow-sm hover:shadow-gray-600 transition-all duration-200`}
          >
            <MdAddShoppingCart />
            <p>Store</p>
          </Link>
        </div>
      </div>
      {data ? (
        <div className="flex   justify-center  flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
          {data &&
            [...data].reverse().map((value, index) => {
              return (
                <Card
                  value={value}
                  key={index}
                  setAddId={setAddId}
                  setDetailsPopup={setDetailsPopup}
                />
              );
            })}
        </div>
      ) : (
        <div className="flex   justify-center  flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </div>
      )}
    </div>
  );
};

export default ArrivalShow;
