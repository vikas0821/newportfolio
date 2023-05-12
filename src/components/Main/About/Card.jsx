
import "./card.css"

function Card(props) {
  return (
    <div className={props.className} data-aos={props.dataAos} data-aos-delay={props.dataAosDelay}>
        <div className="c_icon" ><i className={props.icon}></i></div>
        <h6>{props.title}</h6>
        <p>{props.details}</p>
    </div>
  )
}

export default Card
