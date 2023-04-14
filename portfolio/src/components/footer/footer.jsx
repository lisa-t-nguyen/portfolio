import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Lisa Nguyen</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.facebook.com/nguyentlisa/'><BsFacebook/></a>
        <a href='https://www.instagram.com/lisatnguyen/'><BsInstagram/></a>
      </div>

    </footer>
  )
}

export default Footer