import React from 'react'
import Content from './Content'
import "./skill.css"

function Skill(props) {
  return (
    <div className="skill_box" data-aos="fade-down" data-aos-duration="2000">
      <div className="left_skill">
        <Content dataAos="fade-down" dataAosDuration="1200" contentTitle="Coding"/>
      </div>
      <div className="right_skill">
        <Content dataAos="fade-down" dataAosDuration="1400" contentTitle="Languages"/>
        <Content dataAos="fade-down" dataAosDuration="1600" contentTitle="Tools / Others"/>
      </div>
    </div>
  )
}

export default Skill
