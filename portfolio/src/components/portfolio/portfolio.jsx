import React from 'react'
import './portfolio.css'
import Recipe from '../../assets/Recipe.png'
import StudentFuze from '../../assets/StudentFuze.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Recipe} alt='Recipe Toolkit'/>
          </div>
            <h3>Recipe Toolkit</h3>
            <div className="portfolio_item-buttons">
              <a href='https://github.com/lisa-t-nguyen/recipe-toolkit' className='btn' target='_blank'>GitHub</a>
              <a href='https://lisa-t-nguyen.github.io/recipe-toolkit/' className='btn btn-primary' target='_blank'>Live Deployment</a>
            </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={StudentFuze} alt='StudentFuze'/>
          </div>
            <h3>StudentFuze</h3>
            <div className="portfolio_item-buttons">
              <a href='https://github.com/lisa-t-nguyen/student-fuze' className='btn' target='_blank'>GitHub</a>
              <a href='https://student-fuze.lisanguyen.dev/' className='btn btn-primary' target='_blank'>Live Deployment</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio