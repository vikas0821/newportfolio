import "./navbar.css"
import Typewriter from "./Typewriter";
function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav_title" ><Typewriter /></div>
        <div data-aos="zoom-in" >
            <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-github"></i></a></li>
        </div>
    </div>
  )
}

export default Navbar;
