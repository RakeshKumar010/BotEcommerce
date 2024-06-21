import { useEffect, useState } from "react";
import Card from "../components/Card";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import { VscSettings } from "react-icons/vsc";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import FilterSide from "../components/FilterSide";
import { useLocation } from "react-router-dom";
import ProDetailsPopup from "../components/ProDetailsPopup";
import { ApiColor } from "../components/api/data";
import DummyCard from "../components/DummyCard";

const NewArrival = ({ title }) => {
  const itemsPerPage = 8;
  const [addId, setAddId] = useState(false);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const [totalItem, setTotalItem] = useState();
  const [data, setData] = useState();
  const [filterOpen, setFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [intRate, setIntRate] = useState(100);
  const [isAvailability, setIsAvailability] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
const [pageLoad,setPageLoad]=useState()
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalItem) {
      setCurrentPage(newPage);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(1);
    const getFun = async () => {
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "https://psyrealestate.in/client/" + currentUrl
      );
      const clientData = await response.json();
      // console.log(clientData);
      let result = await fetch(
        "https://psyrealestate.in/product/" + clientData.clientId
      );
      result = await result.json();
 
      if (result.length > 0) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
      let array = [];
      result.map((value) => {
        if (
          location.pathname.substring(1).toUpperCase() ==
          value.section.toUpperCase()
        ) {
          array.push(value);
        }
        console.log('array');
        if (array.length > 0) {
          let filteredData = array;

          filteredData = filteredData.filter(({ price }) => {
            return parseInt(price.replace(/,/g, ""), 10) < intRate * 500;
          });
          // Availability filter
          if (isAvailability) {
            filteredData = filteredData.filter(({ availability }) => {
              return availability === isAvailability;
            });
          }

          // Fabric filter
          if (selectedFabric) {
            filteredData = filteredData.filter(({ fabric }) => {
              return fabric === selectedFabric;
            });
          }

          // Size filter
          if (selectedSize) {
            filteredData = filteredData.filter(({ selectedSizes }) => {
              return selectedSizes.includes(selectedSize);
            });
          }

          setData(filteredData);
          // console.log(filteredData);
        } else {
          setData([])
        }
      });
      const totalPages = Math.ceil(array.length / itemsPerPage);
      setTotalItem(totalPages);
    };
    getFun();
  }, [
    location.pathname,
    intRate,
    isAvailability,
    selectedFabric,
    selectedSize,
    
  ]);
  return (
    <>
      {detailsPopup ? (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      ) : null}
      <div className="bg-gray-100">
        <div className="sticky top-0 z-10 right-0 left-0 ">
          <HeaderTop />
          <NavBar />
        </div>
        <div className="pb-10">
          <h2
            style={{ color: ApiColor }}
            className="text-2xl md:text-3xl uppercase font-bold tracking-widest my-10   text-center "
          >
            {title}
          </h2>
          <div className="flex justify-between px-5 sm:px-10 lg:px-20">
            <div
              onClick={() => {
                setFilterOpen(true);
              }}
              style={
                ApiColor
                  ? { backgroundColor: ApiColor }
                  : { backgroundColor: "black" }
              }
              className="flex   cursor-pointer text-white items-center py-2 px-1 md:px-16 my-5 gap-2"
            >
              <VscSettings />
              <p>Filter</p>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
              <DummyCard />
              <DummyCard />
              <DummyCard />
              <DummyCard />
              <DummyCard />
              <DummyCard />
              <DummyCard />
              <DummyCard />
            </div>
          ) : (
            <div className="flex justify-center flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
              {data &&
                [...data]
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((value) => {
                    return (
                      <Card
                        setDetailsPopup={setDetailsPopup}
                        value={value}
                        setAddId={setAddId}
                        location={location}
                      />
                    );
                  })}
            </div>
          )}
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
              style={
                currentPage === index + 1 ? { backgroundColor: ApiColor } : null
              }
              className={`${
                currentPage === index + 1 ? `  text-white` : null
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
        {filterOpen ? (
          <FilterSide
            isAvailability={isAvailability}
            selectedFabric={selectedFabric}
            setSelectedFabric={setSelectedFabric}
            setIsAvailability={setIsAvailability}
            intRate={intRate}
            setIntRate={setIntRate}
            setFilterOpen={setFilterOpen}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        ) : null}
        <Footer />
      </div>
    </>
  );
};

export default NewArrival;
