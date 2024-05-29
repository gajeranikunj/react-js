import React from 'react';
import './homes2.css';
import { FaTree } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";

function Homes2() {
  return (
    <>
      <div className='homes2'>
        <div>
          <div className='icon'><FaTree /></div>
          <div className='icon-count'>200+</div>
          <div>icons</div>
          <div>A comprehensive repository of freely available icons suitable for various projects.</div>
        </div>
        <div><div className='icon'><FaHome /></div>
          <div className='icon-count'>200+</div>
          <div>Interface Icons</div>
          <div>Icons crafted specifically for your user interfaces.</div></div>
        <div><div className='icon'><BsFillCameraVideoFill /></div>
          <div className='icon-count'>200+</div>
          <div>Animated Icons</div>
          <div>Animated icons to enhance the visual appeal of your projects.</div></div>
      </div>
    </>
  );
}

export default Homes2;
