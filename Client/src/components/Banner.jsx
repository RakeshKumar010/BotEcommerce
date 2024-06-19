import { Carousel } from "flowbite-react";
 
const Banner = ({data,dummyData}) => {

  return (
    <div className="relative h-[12vh]  md:h-[60vh] carousel-main">
     {data? <Carousel>
        {data &&
          data.map(({ carousel }) => {
            return (
              <img
                src={`https://psyrealestate.in/${carousel}`}
                alt="..."
                className="w-full h-full  bg-cover "
              />
            );
          })}
      </Carousel>:<Carousel>
        {dummyData &&
          dummyData.map(({ carousel }) => {
            return (
              <img
                src={carousel}
                alt="..."
                className="w-full h-full  bg-cover "
              />
            );
          })}
      </Carousel>}
    </div>
  );
};

export default Banner;
