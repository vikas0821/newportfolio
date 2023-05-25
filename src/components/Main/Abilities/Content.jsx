import Cskill from "./Cskill"
import "./content.css"
function Content(props) {
    const r1="fa-solid fa-star solidstar";
    const r4="fa-regular fa-star"
  return (
    <div className="content_box">
      <h3 data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
        {props.contentTitle}
      </h3>
      {props.contentTitle==="Coding"
      &&
      <>
      <Cskill   title="HTML/5" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="CSS/3 (+ SASS)" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="Tailwind 3.x" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="BootStrap" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="Javascript" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="JQuery" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="React" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill  title="NodeJS / Express" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill  title="MySQL" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill  title="mongoDB" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill  title="Mongoes" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill  title="JSON / XML" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill  title="AWS / Google Cloud" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill  title="GIT" r1={r1}  r4={r1}  r5={r4}/>
      </>}
      {props.contentTitle==="Languages"
      &&
      <>
      <Cskill dataAos="fade-left" dataAosDuration="1000" title="English" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-left" dataAosDuration="1200" title="Hindi" r1={r1}  r4={r1}  r5={r1}/>
      
      </>}
      {props.contentTitle==="Tools / Others"
      &&
      <>
      <Cskill dataAos="fade-left" dataAosDuration="1000" title="Github / Gitlab" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-left" dataAosDuration="1200" title="Modern Browsers (default: Chrome)" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-left" dataAosDuration="1400" title="Visual studio code" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-left" dataAosDuration="1600" title="Atom" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-left" dataAosDuration="1800" title="Hyper" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-left" dataAosDuration="2000" title="SEO" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-left" dataAosDuration="2200" title="Atom" r1={r1}  r4={r1}  r5={r1}/>
      </>}
      </div>
  )
}

export default Content
