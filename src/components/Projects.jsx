import React from 'react'
import projectimage from '../assets/imgs/project1.png'

export const Projects = () => {
  return (
    <section className="section4 flex" id="projects">
    <h1 className="title">My Recent Work</h1>

    <div className="projects-container grid">
      <div className="project-card flex">
        <div className="top">
          <img src={projectimage} alt="img" />
        </div>

        <div className="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
      <div className="project-card flex">
        <div className="top">
          <img src={projectimage} alt="img" />
        </div>

        <div className="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
      <div className="project-card flex">
        <div className="top">
        <img src= {projectimage} alt="img" />
        </div>

        <div className="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
    </div>
  </section>
  )
}
