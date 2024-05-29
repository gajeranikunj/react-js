import React from 'react';
import './Serchbar.css';

function Serchbar() {
    return (
        <>
            <div className='searchbar'>
                <div className='dropdown'>
                    <form>
                        <fieldset className='df-jc-ic'>
                            <legend className='legend'>icon typy</legend>
                            <select className='w-100 b-n'>
                                <option value="">All icon</option>
                                <option value="">Icon</option>
                                <option value="">Interface</option>
                                <option value="">Animated</option>
                                <option value="">Popular</option>
                            </select>
                        </fieldset>
                    </form>
                </div>
                <div className='serch_input'>
                    <input type="text" placeholder='serch' />
                </div>
                <button className='serch_btn'>
                    serch
                </button>
            </div>
        </>
    )
}

export default Serchbar