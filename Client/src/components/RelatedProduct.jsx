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
      function trimUrl(url) {
        const parsedUrl = new URL(url);
        return (
          parsedUrl.hostname + (parsedUrl.port ? ":" + parsedUrl.port : "")
        );
      }
      const currentUrl = trimUrl(window.location.href);
      let response = await fetch(
        "http://localhost:4001/client/" + currentUrl
      );
      const clientData = await response.json();
      let result = await fetch("http://localhost:4001/product");
      result = await result.json();
      const filterProduct = result.filter((value) => {
        //  console.log(value.clientId == clientData._id);
        return value.clientId == clientData._id;
      });
      if (filterProduct.length > 6) {
        setData(filterProduct);
      }
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
