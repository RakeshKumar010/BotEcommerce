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
import DummyCard from "../components/DummyCard";
const baseUrl = import.meta.env.VITE_APP_URL;

const NewArrival = ({ title }) => {
  const itemsPerPage = 8;
  const [addId, setAddId] = useState(false);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const [totalItem, setTotalItem] = useState(0);
  const [data, setData] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [intRate, setIntRate] = useState(100);
  const [isAvailability, setIsAvailability] = useState(null);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalItem) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const fetchAndFilterData = async () => {
      setIsLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentPage(1);

      try {
        const response = await fetch(`${baseUrl}/product`);
        const result = await response.json();

        // Initial filter by section
        const sectionFiltered = result.filter(
          (item) => item.section === title.replace(/\s+/g, "")
        );

        // Apply all filters
        let filteredData = sectionFiltered.filter((item) => {
          const price = parseInt(item.price.replace(/,/g, ""), 10);
          return price < intRate * 500;
        });

        if (isAvailability !== null) {
          filteredData = filteredData.filter(
            (item) => item.availability === isAvailability
          );
        }

        if (selectedFabric) {
          filteredData = filteredData.filter(
            (item) => item.fabric === selectedFabric
          );
        }

        if (selectedSize) {
          filteredData = filteredData.filter((item) =>
            item.selectedSizes.includes(selectedSize)
          );
        }

        setData(filteredData);
        setTotalItem(Math.ceil(filteredData.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
        setTotalItem(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndFilterData();
  }, [
    location.pathname,
    title,
    intRate,
    isAvailability,
    selectedFabric,
    selectedSize,
  ]);

  return (
    <>
      {detailsPopup && (
        <ProDetailsPopup addId={addId} setDetailsPopup={setDetailsPopup} />
      )}
      <div className="bg-gray-100">
        <div className="sticky top-0 z-10 right-0 left-0 ">
          <HeaderTop />
          <NavBar />
        </div>
        <div className="pb-10">
          <h2
            style={{ color: 'black' }}
            className="text-2xl md:text-3xl uppercase font-bold tracking-widest my-10 text-center"
          >
            {title}
          </h2>
          <div className="flex justify-between px-5 sm:px-10 lg:px-20">
            <div
              onClick={() => setFilterOpen(true)}
              style={{ backgroundColor:  "black" }}
              className="flex cursor-pointer text-white items-center py-2 px-1 md:px-16 my-5 gap-2"
            >
              <VscSettings />
              <p>Filter</p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
              {Array(8).fill().map((_, i) => <DummyCard key={i} />)}
            </div>
          ) : data.length > 0 ? (
            <div className="flex justify-center flex-wrap gap-4 gap-y-7 sm:px-2 xl:px-10">
              {data
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((value) => (
                  <Card
                    key={value.id}
                    setDetailsPopup={setDetailsPopup}
                    value={value}
                    setAddId={setAddId}
                    location={location}
                  />
                ))}
            </div>
          ) : (
            <p 
              style={{ color:  "black" }}
              className="text-center font-bold text-2xl"
            >
              Data Not Found
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalItem > 1 && (
          <div className="flex items-center select-none cursor-pointer justify-center py-10 gap-3">
            {currentPage > 1 && (
              <GoArrowLeft onClick={() => handlePageChange(currentPage - 1)} />
            )}
            {Array.from({ length: totalItem }, (_, i) => (
              <p
                key={i}
                style={{
                  backgroundColor: currentPage === i + 1 ? 'black' : undefined,
                  color: currentPage === i + 1 ? "white" : undefined,
                }}
                className="flex justify-center items-center w-10 h-10"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </p>
            ))}
            {currentPage < totalItem && (
              <GoArrowRight onClick={() => handlePageChange(currentPage + 1)} />
            )}
          </div>
        )}

        {filterOpen && (
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
        )}
        <Footer />
      </div>
    </>
  );
};

export default NewArrival;