import React from 'react'
import Resume from '../../assets/Resume.pdf'

const HeaderButtons = () => {
  return (
    <div className="HeaderButtons">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat!</a>
    </div>
  )
}

export default HeaderButtons