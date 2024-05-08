import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisible);
      return () => window.removeEventListener('scroll', toggleVisible);
    }, []);
  
    return (
      <button
        className={`fixed bottom-2 right-2 z-50 p-2 rounded-full text-white bg-[#ac384b] hover:bg-red-600 ${visible ? '' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <FaArrowCircleUp size={30} />
      </button>
    );
  };

export default ScrollTop