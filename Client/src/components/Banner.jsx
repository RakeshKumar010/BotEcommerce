import Banner1 from "../assets/image/banner1.webp";
import Banner2 from "../assets/image/banner2.webp";
import { Carousel } from "flowbite-react";
const Banner = () => {
  const data = [Banner1, Banner2];
  return (
    <div className="relative  h-[25vh] md:h-[90vh]">
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
