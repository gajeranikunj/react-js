import React from 'react'
import './nav.css';
import logo from '../img/nav-img/logo.png'
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <nav>
        <div className='nav-logo'>lc<img src={logo} alt="" />ngrid</div>
        <div className='nav-manu'>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="Icon">icon</Link>
          </button>
          <button>
            <Link to="/">Interface icons</Link>
          </button>
          <button>
            <Link to="/">Animated icons</Link>
          </button>
        </div>
        <div className='login'>
          <div><IoDownloadOutline fontSize={30} /></div>
          <div>R</div>
        </div>
      </nav>
      <div className='Nav_spase'>

      </div>
    </>
  )
}

export default Nav