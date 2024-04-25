import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {" "}
      <img
        className="brightness-50 filter lg:h-[500px] object-cover w-full"
        src="https://tailwind-ecommerce-demo.vercel.app/header-bg.34bfbe1b.jpeg"
        alt="Living room image"
      />{" "}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col left-1/2 lg:ml-5 max-w-[1200px] mx-auto text-center text-white top-1/2 w-11/12">
        {" "}
        <h1 className="font-bold lg:text-left sm:text-5xl text-4xl">
          {" "}
          Best Collection {" "}
        </h1>{" "}
        <p className="lg:pt-5 lg:text-base lg:text-left lg:w-3/5 pt-3 text-xs">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          aperiam natus, nulla, obcaecati nesciunt, itaque adipisci earum
          ducimus pariatur eaque labore.{" "}
        </p>{" "}
        <button className="bg-amber-400 duration-100 hover:bg-yellow-300 lg:h-10 lg:mx-0 lg:px-10 lg:w-2/12 mt-5 mx-auto px-3 py-1 text-black w-1/2">
          {" "}
          Order Now{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Banner;
