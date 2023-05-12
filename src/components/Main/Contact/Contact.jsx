import "./contact.css"
import Info from "./Info"
import Form from "./Form"
function Contact() {
  return (
   <section className="contact_box">
        <div> <h1 data-aos="fade-up" data-aos-duration="1500">HIRE ME</h1></div>
        <div className="contact_container">
        <Info dataAos="zoom-in-right" dataAosDuration="1500" />
        <Form dataAos="zoom-in-right" dataAosDuration="4000"/>
        </div>
        
   </section>
  )
}

export default Contact
