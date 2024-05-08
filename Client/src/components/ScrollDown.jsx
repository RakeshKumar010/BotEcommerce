import React, { useState, useEffect } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

const ScrollDown = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled < document.documentElement.scrollHeight - window.innerHeight - 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
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
        onClick={scrollToBottom}
      >
        <FaArrowCircleDown size={30} />
      </button>
    );
  };
export default ScrollDown