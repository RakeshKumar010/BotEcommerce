import { Carousel } from "flowbite-react";
 
const Banner = ({data}) => {
  const dummyData = [
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },

    {
      carousel:
        "https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg",
    },
  ];
  return (
    <div className="relative h-56 md:h-screen carousel-main">
     {data? <Carousel>
        {data &&
          data.map(({ carousel },index) => {
            return (
              <img
              key={index}
                src={`${carousel}`}
                alt="..."
                className="w-full h-full  bg-cover "
              />
            );
          })}
      </Carousel>:<Carousel>
        {dummyData &&
          dummyData.map(({ carousel },index) => {
            return (
              <img
              key={index}
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
