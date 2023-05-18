import React from 'react'
import './projects.css'
import Recipe from '../../assets/Recipe.png'
import StudentFuze from '../../assets/StudentFuze.png'
import ExpeditionPlanner from '../../assets/ExpeditionPlanner.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

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

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={ExpeditionPlanner} alt='ExpeditionPlanner'/>
          </div>
            <h3>Expedition Planner</h3>
            <div className="portfolio_item-buttons">
              <a href='https://github.com/lisa-t-nguyen/expedition-planner' className='btn' target='_blank'>GitHub</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Projects