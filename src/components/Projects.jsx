import React from 'react'
import projectimage from '../assets/imgs/project1.png'

export const Projects = () => {
  return (
    <section class="section4 flex" id="projects">
    <h1 class="title">My Recent Work</h1>

    <div class="projects-container grid">
      <div class="project-card flex">
        <div class="top">
          <img src={projectimage} alt="img" />
        </div>

        <div class="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
      <div class="project-card flex">
        <div class="top">
          <img src={projectimage} alt="img" />
        </div>

        <div class="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
      <div class="project-card flex">
        <div class="top">
        <img src= {projectimage} alt="img" />
        </div>

        <div class="bottom">
          <p>Dec 15, 2022</p>
          <p>Full-Stack Web Application Built Using React & Firebase</p>
        </div>
      </div>
    </div>
  </section>
  )
}
