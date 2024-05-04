import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const ScrollUpDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div>
          <div
            onClick={scrollToTop}
            className="fixed bottom-14 right-2 cursor-pointer text-4xl text-gray-400/50"
          >
            <FaArrowCircleUp />
          </div>
          <div
            onClick={scrollToBottom}
            className="fixed bottom-2 right-2 cursor-pointer text-4xl text-gray-400/50"
          >
            <FaArrowCircleDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollUpDown;
