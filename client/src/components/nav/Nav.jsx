import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* ==== If "" is the active page, set class to active ==== */}
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      {/* <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>ICON HERE</a> */}
    </nav>
  )
}

export default Nav