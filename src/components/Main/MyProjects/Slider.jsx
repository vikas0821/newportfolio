import "./slider.css";
import web1 from"../../Assest/image/slide_img/daily.png"
import web2 from"../../Assest/image/slide_img/fab.png"
import web3 from"../../Assest/image/slide_img/crazy.png"
import web4 from"../../Assest/image/slide_img/tindog.png"

import { useState } from "react";
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, image: web1, alt: 'Image 1' },
    { id: 2, image: web2 , alt: 'Image 2' },
    { id: 3, image: web3 , alt: 'Image 3' },
    { id: 4, image: web4 , alt: 'Image 4' }

  
  
  ];

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1 >= slides.length ? 0 : slideIndex + 1);
  };

  return (
    <div className="slider-container" data-aos="flip-up">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-item ${
            index === slideIndex ? 'active' : ''
          }`}
        >
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
     
        <button className="slider-control prev" onClick={prevSlide}>
        <i class="fa-solid fa-arrow-left fa-fade"></i>
        </button>
        <button className="slider-control next" onClick={nextSlide}>
        <i class="fa-solid fa-arrow-right fa-fade"></i>
        </button>
     
    </div>
  );
}

export default Slider;
