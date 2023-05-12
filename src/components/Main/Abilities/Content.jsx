import Cskill from "./Cskill"
import "./content.css"
function Content(props) {
    const r1="fa-solid fa-star";
    const r4="fa-regular fa-star"
  return (
    <div className="content_box">
      <h3 data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
        {props.contentTitle}
      </h3>
      {props.contentTitle==="Coding"
      &&
      <>
      <Cskill dataAos="fade-right" dataAosDuration="1000"  title="HTML/5" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="1200" title="CSS/3 (+ SASS)" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="1400" title="Tailwind 3.x" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="1600" title="BootStrap" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="1800" title="Javascript" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="2000" title="JQuery" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="2200" title="React" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="2400" title="NodeJS / Express" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="2600" title="MySQL" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="2800" title="mongoDB" r1={r1}  r4={r1}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="3000" title="Mongoes" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="3200" title="JSON / XML" r1={r1}  r4={r1}  r5={r1}/>
      <Cskill dataAos="fade-right" dataAosDuration="3400" title="AWS / Google Cloud" r1={r1}  r4={r4}  r5={r4}/>
      <Cskill dataAos="fade-right" dataAosDuration="3600" title="GIT" r1={r1}  r4={r1}  r5={r4}/>
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
