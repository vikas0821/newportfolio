import "./ecard.css";
function Ecard(props) {
  return (
    <div className="ecard_box">
        <div className="e_left" >
        <div className="circle" > </div>
            <p >{props.year}</p>
        </div>
        <div className="e_right" >
            <div className="circle" > </div>
            <div >
              
              <h4>
                {props.course}
              </h4> 
              <p>{props.branch}</p>
              <p>{props.college}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Ecard
