import "./cskill.css"
function Cskill(props) {
  return (
    <div className="rating" data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
    <h6>{props.title}</h6>
     <span className="r_box">
     <i className={props.r1}></i>
     <i className={props.r1}></i>
     <i className={props.r1}></i>
     <i className={props.r4}></i>
     <i className={props.r5}></i>
     </span>
   </div>
  )
}

export default Cskill
