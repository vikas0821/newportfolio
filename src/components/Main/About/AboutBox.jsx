
import pic5 from "../../Assest/image/pic5.jpg"
import "./aboutbox.css"
function AboutBox() {
    const about_me="Hi, my name is Vikas kannaujiya I'm a Creative / Full Stack Developer from the Gorakhpur, Uttar Pradesh. I developed a skill set in a range of technologies and frameworks, including React, Node, Express and Tailwind. Where I really value clean and readable code. Also I'm passionate about UX / UI.";
  return (
    <div className="about_box">
        <div className="about_img" data-aos="flip-left" data-aos-delay="500">
            <img src={pic5} alt=""/>
        </div>
        <div className="about_me" data-aos="zoom-in-right">
            <h1>
                ABOUT ME
            </h1>
            <p>
                {about_me}
            </p>
        </div>
        
    </div>
  )
}

export default AboutBox
