
import Banner1 from "../assets/image/offerBanner1.webp";
import Banner2 from "../assets/image/offerBanner2.webp";
import Banner0 from '../assets/image/offerBanner.jpg'
import { Carousel } from "flowbite-react";
const Banner = () => {
  const data = [Banner0,Banner1, Banner2];
  return (
    <div className="relative  h-[40vh] ">
      <Carousel  >
        {data &&
          data.map((value) => {
            return (
              <img
                src={value}
                alt="..."
                className="w-full h-full  bg-contain "
              />
            );
          })}
      </Carousel>
      
    </div>
  );
};

export default Banner;
