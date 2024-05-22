import React, { useEffect, useState } from "react";
import MiniCard from "./MiniCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFun = async () => {
      let result = await fetch("http://13.201.55.203:3000/product");
      result = await result.json();
      setData(result);
    };
    getFun();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5">
      <p className="font-semibold text-2xl text-center my-6 mt-10 md:my-10 md:mt-40">
        You May Also Like
      </p>
      {error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : data.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Slider {...settings}>
          {data.slice(0, 6).map((value, index) => (
            <MiniCard key={index} value={value} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default RelatedProduct;