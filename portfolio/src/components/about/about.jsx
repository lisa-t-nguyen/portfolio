import React from 'react'
import './about.css'
import Picture from '../../assets/Picture.png'
import {MdOutlineAssignmentTurnedIn} from 'react-icons/md'
import {IoIosListBox} from 'react-icons/io'
import {SiGithub} from 'react-icons/si'

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
              <MdOutlineAssignmentTurnedIn className='about_icon'/>
              <h5>800+</h5>
              <small>Hours of Coding</small>
            </article>

            <article className='about_card'>
              <IoIosListBox className='about_icon'/>
              <h5>130+</h5>
              <small>Coding Assignments</small>
            </article>

            <article className='about_card'>
              <SiGithub className='about_icon'/>
              <h5>700+</h5>
              <small>GitHub Contributions</small>
            </article>

          </div>

          <p>
            After earning my Bachelor's Degree from California State University Fullerton, I pursued a Master's Degree at California State 
            University Long Beach. Shortly after moving to Massachusetts, I entered the tech world to explore my passion in computer technology. I committed
            to an accelerated Web Development bootcamp at LearningFuze in Irvine, California. During and after the bootcamp, my fascination for web
            development solidified and I am always hungry to learn more- as I am a lifelong learner!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About