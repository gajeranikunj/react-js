import './gotop.css';
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
const Gotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);


  // ...............
  // Get the full height of the webpage
  var fullHeight = document.documentElement.scrollHeight;
  console.log("Full height of the webpage:", fullHeight);

  // ..............
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + screenHeight - 10 > screenHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [screenHeight]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className='go-top-main' onClick={goToTop}>
          <AiOutlineArrowUp />
        </div>
      )}
    </>
  );
};

export default Gotop;
