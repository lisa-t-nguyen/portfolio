import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lisa Nguyen</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
      </div>
    </header>
  )
}

export default header