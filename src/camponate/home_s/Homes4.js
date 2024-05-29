import React from 'react'
import './Homes4.css';
import Camera from "./../img/nav-img/camera.gif"

function Homes4() {
    return (
        <>
            <div className='homes4'>
                <div className='homes4-text'>
                    <div className='homes4-titel'>Animated</div>
                    <div className='Camera'>ic<img src={Camera} alt="" />ns</div>
                </div>
                <div className='homes4-text2'>
                    <div className='text-1'>We provide you animated icons through which you can bring your website to life and make it animated. animations plays a vital role in your web page as it can directly enhance the user experience and change their perception of visualizing your brand.</div>
                    <div className='text-2'>Explore different categories of animated icons with unique creativity to unlock more productivity.</div>
                    <div>
                        <div className='more-btn'>more..!</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homes4
