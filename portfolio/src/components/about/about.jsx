import React from 'react'
import './about.css'
import Picture from '../../assets/Picture.png'
import {BsBook} from 'react-icons/bs'
import {ImBooks} from 'react-icons/im'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Picture} alt='Lisa Nguyen'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <BsBook className='about_icon'/>
              <h5>Experience</h5>
              <small>10+ years of professional general working experience</small>
            </article>

            <article className='about_card'>
              <ImBooks className='about_icon'/>
              <h5>Tech Stack</h5>
              <small>HTML, CSS, JavaScript, React, Node, Express, PostgreSQL</small>
            </article>

            <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
          </div>

          <p>
          I'm looking for a great, enthusiastic engineering team to work for that will provide me with challenging, interesting work 
          that I can learn from and contribute to. I graciously receive and appreciate feedback/constructive criticism on how to 
          improve and am intentional on implementing them in my day-to-day operations. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About