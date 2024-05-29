import React from 'react'
import './homes1.css'
import { IoSearch } from "react-icons/io5";
function HomeS1() {
    return (
        <>
            <div className='main'>
                <div className='data_s1'>
                    <div className='titel'>
                        <div className='line1'>
                            <div>Take the hassle out of</div>
                            <div>icons</div>
                        </div>
                        <div className='line2'>in your website.
                        </div>
                    </div>

                    <div className='para'>
                        <p>
                            "At <b>IconGrid</b>, we believe in the power of connection to transform lives and shape futures. Join our global community to share ideas, collaborate on projects, and build meaningful relationships. Together, let's turn dreams into reality."
                        </p>
                    </div>
                    <div className='search'>
                        <div className='icon'><IoSearch fontSize={18} /></div>
                        <div className='inputbox'>
                            <input type="text" placeholder='search...' />
                        </div>
                        <div className='go_btn'>Go</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeS1