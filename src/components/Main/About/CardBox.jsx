import React from 'react'
import Card from './Card'
import "./cardbox.css"
function CardBox() {
    const d_1="I've done so many project using javascript like Animated template, Calculator, Form validation, Infinity-scroll, light-dark-mode  .etc";
    const d_2=" I've done so many project using React like OTT platform, E-commerce, News website, Weather Api  .etc";
    const d_3="I've done some project using Nodejs, ExpressJS and MongoDB like Bookmarks, Daily Journal, to-do list .etc";
  return (
    <div className="card_box">
      <Card  className="card js_box" icon="fa-solid fa-code" title="Javascript" details={d_1}  />
      <Card className="card r_box" icon="fa-brands fa-react " title="React" details={d_2} />
      <Card className="card n_box" icon="fa-brands fa-node-js " title="NodeJs " details={d_3} />
    </div>
  )
}

export default CardBox
