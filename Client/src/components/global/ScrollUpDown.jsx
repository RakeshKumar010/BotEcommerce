import React, { useEffect, useState } from "react";
import ScrollTop from "../ScrollTop";
import ScrollDown from "../ScrollDown";

const ScrollUpDown = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = (e) => {
    const currentScrollY = window.scrollY;
    if (scrollY > currentScrollY) {
      setScrollDirection("up");
    } else if (scrollY < currentScrollY) {
      setScrollDirection("down");
    }
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]); // Add scrollY to the dependency array
  return (
    <div className="  text-2xl text-black">
      {scrollDirection == "up" ? <ScrollTop /> : <ScrollDown/>}
       
    </div>
  );
};

export default ScrollUpDown;
