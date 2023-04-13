import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import Me from '../../assets/Me.png'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lisa Nguyen</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
        <SocialMedia />

        <div className="me">
          <img src={Me} alt='Lisa Nguyen' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header