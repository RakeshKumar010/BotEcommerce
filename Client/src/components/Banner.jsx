import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
const Banner = ({data}) => {
   

  return (
    <div className="relative h-[12vh]  md:h-[60vh] carousel-main">
      <Carousel>
        {data &&
          data.map(({ carousel }) => {
            return (
              <img
                src={`http://3.110.181.1:3000/${carousel}`}
                alt="..."
                className="w-full h-full  bg-cover "
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default Banner;
