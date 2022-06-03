import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useState } from 'react'
import { FaBitcoin } from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* ==== If "" is the active page, set class to active ==== */}
      <a href='/' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='profile' onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}><CgProfile/></a>
      <a href='coins' onClick={() => setActiveNav('#coins')} className={activeNav === '#coins' ? 'active' : ''}><FaBitcoin/></a>
      {/* <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a> */}
    </nav>
  )
}

export default Nav