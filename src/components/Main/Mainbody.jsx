import CardBox from "./About/CardBox";
import Education from "./Education/Education";
import Abilities from "./Abilities/Abilities";
import AboutBox from "./About/AboutBox";

import Contact from "./Contact/Contact";
import Certificate from "./Certification/Certificate";

import "./mainbody.css"
import Projects from "./MyProjects/Projects";

function Mainbody() {
  return (
    <section className="mainbody">
        <CardBox />
        <AboutBox />
        <Education />
        <Abilities />
        <Projects />
       
        <Certificate />
        <Contact />
    </section>
  )
}

export default Mainbody
