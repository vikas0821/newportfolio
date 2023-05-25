import Ecard from "./Ecard";
import "./education.css";
function Education() {
  return (
   <section className="e_container" >
        <h1 data-aos="fade-down">EDUCATION</h1>
        <Ecard  year="2017 - 2020" course="Bachelor of Technology" branch="Electronics and Communication Engineering" college="Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh" />
        <Ecard   year="2014 - 2017" course="Diploma" branch="Electronics Engineering" college="Mahamaya Polytechnic of Information Technology, Gorakhpur, Uttar Pradesh" />
        <Ecard   year="2013 - 2014" course="Intermediate" college="St Andrew's Inter College, Gorakhpur, Uttar Pradesh" />
        <Ecard  year="2011 - 2012" course="HighSchool" college="Saraswati Inter College, Gorakhpur, Uttar Pradesh" />
   </section>
  )
}

export default Education
