import { useEffect, useState } from "react";
import Card from "../components/Card";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import { VscSettings } from "react-icons/vsc";
import { GoArrowRight } from "react-icons/go";



const NewArrival = ({title}) => {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState("created-descending");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // You can perform additional actions based on the selected option here.
  };
  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("https://botecommerce.onrender.com/product");
      result = await result.json();
      setData(result);
    };
    getFun();
  }, []);
  return (
    <div className="bg-gray-100">
      <HeaderTop />
      <NavBar />
      <div>
        <h2 className="text-3xl font-bold tracking-widest my-10 text-uiColor text-center ">
          {title}
        </h2>
        <div className="flex justify-between px-5 sm:px-10 lg:px-20">
          <div className="flex bg-uiColor text-white items-center py-2 px-1 md:px-16 my-5 gap-2">
            <VscSettings />
            <p>Filter</p>
          </div>

          <div className="flex md:items-center md:gap-5 flex-col md:flex-row  items-end">
            <p>Sort by</p>
            <select
              className="p-3 border-none"
              name="SortBy"
              id="js-sortby"
              aria-describedby="a11y-refresh-page-message a11y-selection-message"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="manual">Featured</option>
              <option value="best-selling">Best selling</option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
              <option value="created-ascending">Date, old to new</option>
              <option value="created-descending">Date, new to old</option>
            </select>
          </div>
        </div>
        <div className="flex md:justify-between justify-center  flex-wrap gap-4 sm:px-10 lg:px-20">
          {data &&
            [...data].reverse().map((value) => {
              return <Card value={value} />;
            })}
        </div>
      </div>
      {/* pagination  */}

        <div className="flex items-center justify-center py-10 gap-3 ">
          <p className="bg-uiColor flex justify-center items-center w-10 h-10 text-white">
            1
          </p>
          <p className=" flex justify-center items-center w-10 h-10 ">
            2
          </p>
          <GoArrowRight className="text-lg" />
        </div>
 
      <Footer />
    </div>
  );
};

export default NewArrival;
