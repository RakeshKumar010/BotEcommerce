import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { ApiColor } from './api/data';

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
     let bg=`bg-[${ApiColor}]/90`
    return (
      <button
      style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black' }}
        className={`fixed bottom-16 md:bottom-2 animate-bounce right-2 z-50 p-2 rounded-full text-white   hover:${bg} ${visible ? '' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <FaArrowCircleUp size={30} />
      </button>
    );
  };

export default ScrollTop