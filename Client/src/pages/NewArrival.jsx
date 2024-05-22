import { useEffect, useState } from "react";
import Card from "../components/Card";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import { VscSettings } from "react-icons/vsc";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import FilterSide from "../components/FilterSide";
import { useLocation } from "react-router-dom";

const NewArrival = ({ title }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const location =useLocation()
  const [totalItem,setTotalItem]=useState()
  const [data, setData] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("created-descending");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // You can perform additional actions based on the selected option here.
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalItem) {
      setCurrentPage(newPage);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1)
    const getFun = async () => {
      let result = await fetch("http://43.204.35.127:3000/product");
      result = await result.json();

      let array=[]
      result.map((value)=>{
        if(location.pathname.substring(1).toUpperCase()==value.section.toUpperCase()){
          array.push(value)
        }
        setData(array);
      })
      const totalPages = Math.ceil(array.length / itemsPerPage);
      setTotalItem(totalPages);
    
    };
    getFun();
    
  }, [location.pathname]);
  return (
    <div className="bg-gray-100">
     <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
        </div>
      <div className="pb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest my-10 text-uiColor text-center ">
          {title} 
        </h2>
        <div className="flex justify-between px-5 sm:px-10 lg:px-20">
          <div onClick={()=>{
            setFilterOpen(true)
          }} className="flex bg-uiColor cursor-pointer text-white items-center py-2 px-1 md:px-16 my-5 gap-2">
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
        <div className="flex justify-center flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
    {data &&
      [...data]
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((value) => {
          return <Card value={value} location={location} />;
        })}
  </div>
      </div>
      {/* pagination  */}

      <div className="flex items-center select-none cursor-pointer justify-center py-10 gap-3 ">
    {currentPage > 1 && (
      <GoArrowLeft
        className="text-lg"
        onClick={() => handlePageChange(currentPage - 1)}
      />
    )}
    {[...Array(totalItem)].map((_, index) => (
      <p
        key={index}
        className={`${
          currentPage === index + 1 ? "bg-uiColor text-white" : null
        } flex justify-center items-center w-10 h-10  `}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </p>
    ))}
    {currentPage < totalItem && (
      <GoArrowRight
        className="text-lg"
        onClick={() => handlePageChange(currentPage + 1)}
      />
    )}
  </div>
     {filterOpen? <FilterSide setFilterOpen={setFilterOpen} />:null}
      <Footer />
    </div>
  );
};

export default NewArrival;
