import "./cskill.css"
function Cskill(props) {
  return (
    <div className="rating">
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
