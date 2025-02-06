import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import DummyCard from "./DummyCard";
const baseUrl = import.meta.env.VITE_APP_URL;

const BestSeller = ({ setDetailsPopup, setAddId }) => {
  const [data, setData] = useState();
  const [navItemData, setNavItemData] = useState(false);

  useEffect(() => {
    const getFun = async () => {
      let resultNavItem = await fetch(`${baseUrl}/nav-item`);
      resultNavItem = await resultNavItem.json();
      setNavItemData(resultNavItem.length > 0 ? resultNavItem[0] : false);
      let result = await fetch(`${baseUrl}/product`);
      result = await result.json();
      const filterData = result.filter((value) => {
        return value.section == resultNavItem[0].nav4.replace(/\s+/g, "");
      });
      setData(filterData);
    };
    getFun();
  }, []);

  return (
    <div className="md:p-10 p-0 mt-16">
      <div className="text-center py-5">
        <Link
          to={navItemData ? navItemData.nav4.replace(/\s+/g, "") : "menu4"}
          className="font-semibold text-lg md:text-2xl"
        >
          {navItemData ? navItemData.nav2 : "Section 2"}
        </Link>
        <p className="">Explore suit sets</p>
        <div className="flex items-center my-5 justify-center ">
          <Link
            style={{ backgroundColor: "black" }}
            to={navItemData ? navItemData.nav4.replace(/\s+/g, "") : "menu4"}
            className={`flex items-center  text-white p-2 md:w-[40vw] w-[60vw]  justify-center rounded-full hover:scale-105 hover:shadow-sm hover:shadow-gray-600 transition-all duration-200`}
          >
            <MdAddShoppingCart />
            <p>Store</p>
          </Link>
        </div>
      </div>
      {data ? (
        <div className="flex   justify-center  flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
          {data &&
            [...data].slice(0, 8).map((value, index) => {
              return (
                <Card
                  key={index}
                  setDetailsPopup={setDetailsPopup}
                  setAddId={setAddId}
                  value={value}
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
export default BestSeller;
