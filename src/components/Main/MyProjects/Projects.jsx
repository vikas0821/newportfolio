import React from 'react'
import Slider from "./Slider"
import "./projects.css"
import ProjectBox from './ProjectBox'


function Projects() {
  
  return (
    <section className="project_box" >
        <h1 data-aos="fade-right" data-aos-duration="2000">PROJECTS</h1>
         <Slider />
         <ProjectBox />
    </section>
  )
}

export default Projects
