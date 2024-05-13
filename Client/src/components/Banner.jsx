import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
const Banner = () => {
  const [data,setData]=useState()

  useEffect(() => {
    
    const getFun = async () => {
    let result= await fetch('https://botecommerce.onrender.com/add-carousel')
    result = await result.json()
    setData(result);
    console.log(result);
    }
    getFun()
  }, []);

  return (
    <div className="relative h-[12vh]  md:h-[60vh] carousel-main">
      <Carousel>
        {data &&
          data.map(({carousel}) => {
            return (
              <img
              src={`https://botecommerce.onrender.com/${carousel}`}
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
