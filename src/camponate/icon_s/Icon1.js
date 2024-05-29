import React from 'react'
import './icons1.css'

const Icons1 = () => {
    return (
        <>
            <div className='flex icon-1'>
                <div className='w-50'>
                    <div className='icons1_data1'>
                        Explore a diverse collection of over 14.2 million PNG icons available for free access.                   </div>
                    <div className='icons1_data2'>
                        Discover the extensive repository of vector icons for download, encompassing SVG, EPS, PSD, and BASE 64 formats, making it the most comprehensive database available.
                    </div>
                    <div className='icons1_data3'>
                        <div className='icons1_data3_btn'>
                            See Trending Icon
                        </div>
                    </div>
                </div>
                <div className='w-50'>
                    <img className='w-100' src="https://icongrid.vercel.app/static/media/app-preview-dark.1195ea97a57e706b6912.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Icons1
