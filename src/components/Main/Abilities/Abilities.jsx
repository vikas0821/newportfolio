import Skill from "./Skill"
import "./abilities.css"
function Abilities() {
  return (
    <section className="abilities">
        <h1 data-aos="fade-down">ABILITIES</h1>
        <p data-aos="fade-right">Here is a summary of my most important skills and abilities as a Creative Web Developer:</p>
        <Skill dataAos="fade-down"/>
    </section>
  )
}

export default Abilities
