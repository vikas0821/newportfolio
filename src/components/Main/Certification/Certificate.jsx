import React from 'react'
import "./certificate.css"
import Slideshow from './Slideshow'

function Certificate() {
  return (
    <section className="certi_box">
        <h1 data-aos="fade-up" data-aos-duration="1200">CERTIFICATES</h1>
        <Slideshow dataAos="flip-right" dataAosDuration="3000" />
    </section>
  )
}

export default Certificate
