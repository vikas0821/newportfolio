import "./ecard.css";
function Ecard(props) {
  return (
    <div className="ecard_box">
        <div className="e_left" >
        <div className="circle" > </div>
            <p data-aos={props.dataAosR} data-aos-delay={props.dataAosDelayR}>{props.year}</p>
        </div>
        <div className="e_right" >
            <div className="circle" > </div>
            <div data-aos={props.dataAosL} data-aos-delay={props.dataAosDelayL}>
              
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
