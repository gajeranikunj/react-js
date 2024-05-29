import React from 'react';
import './Homes3.css';
import { GoSmiley } from "react-icons/go";
import { PiSmileyFill } from "react-icons/pi";
function Homes3() {
    return (
        <>
            <div className='homes3'>
                <div className='homes3-titel'>
                    <div >
                        GICONS, The highly sought-after collection of free SVG user interface icons
                    </div>
                    <div>
                        Explore a collection of over 24,300 free UI icons, presented in 9 distinct styles, fully editable and customizable to uniquely suit your needs.
                    </div>
                </div>
                <div className='carte'>
                    <div className='carte-1 carte-i'>
                        <div className='cartbg'></div>
                        <div className='face-icon'>
                            <div className='face-bg'><GoSmiley /></div>
                        </div>
                        <div className='carte-titel'>Regular</div>
                        <div className='carte-para'>"Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."</div>
                        <div className='carte-btn'>Explore</div>
                    </div>
                    <div className='carte-2 carte-i'>
                        <div className='cartbg'></div>
                        <div className='face-icon'>
                            <div className='face-bg'><PiSmileyFill /></div>
                        </div>
                        <div className='carte-titel'>Bold</div>
                        <div className='carte-para'>"Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."</div>
                        <div className='carte-btn'>Explore</div>
                    </div>
                    <div className='carte-3 carte-i'>
                        <div className='cartbg'></div>
                        <div className='face-icon'>
                            <div className='face-bg'><GoSmiley /></div>
                        </div>
                        <div className='carte-titel'>Regular</div>
                        <div className='carte-para'>"Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."</div>
                        <div className='carte-btn'>Explore</div>
                    </div>
                    <div className='carte-4 carte-i'>
                        <div className='cartbg'></div>
                        <div className='face-icon'>
                            <div className='face-bg'><GoSmiley /></div>
                        </div>
                        <div className='carte-titel'>Regular</div>
                        <div className='carte-para'>"Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."</div>
                        <div className='carte-btn'>Explore</div>
                    </div>
                </div>
            </div>
         
        </>
    );
}

export default Homes3;
