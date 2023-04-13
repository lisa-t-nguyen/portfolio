import React from 'react'
import './nav.css'
import {RiHomeHeartFill} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {FaTools} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#') 
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeHeartFill/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FaTools/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TfiEmail/></a>
    </nav>
  )
}

export default Nav