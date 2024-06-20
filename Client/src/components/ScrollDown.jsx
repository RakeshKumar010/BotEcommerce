import React, { useState, useEffect } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { ApiColor } from './api/data';

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
    let bg=`bg-[${ApiColor}]/90`
    return (
      <button
      style={ApiColor?{ backgroundColor: ApiColor }:{ backgroundColor: 'black' }}
        className={`fixed bottom-16 md:bottom-2 animate-bounce right-2 z-0 p-2 rounded-full text-white  hover:${bg} ${visible ? '' : 'hidden'}`}
        onClick={scrollToBottom}
      >
        <FaArrowCircleDown size={30} />
      </button>
    );
  };
export default ScrollDown