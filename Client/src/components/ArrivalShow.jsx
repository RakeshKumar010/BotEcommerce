import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md"; 
import DummyCard from "./DummyCard";
const baseUrl = import.meta.env.VITE_APP_URL;

const ArrivalShow = ({ setDetailsPopup, setAddId }) => {
  const [data, setData] = useState();
  const [navItemData, setNavItemData] = useState(false);
  useEffect(() => {
    const getFun = async () => {
     

      let resultNavItem = await fetch(`${baseUrl}/nav-item`);
      resultNavItem = await resultNavItem.json();

  

      setNavItemData(
        resultNavItem.length > 0 ? resultNavItem[0] : false
      );

      let result = await fetch(`${baseUrl}/product`);
      result = await result.json();
      const filterData=result.filter((value)=>{
        return value.section==resultNavItem[0].nav1.replace(/\s+/g, "");
        
      })
      setData(filterData);
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
            style={  { backgroundColor: "black" }
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
            [...data].slice(0,8).map((value, index) => {
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
