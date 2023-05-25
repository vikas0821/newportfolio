import "./contact.css"
import Info from "./Info"
import Form from "./Form"
function Contact() {
  return (
   <section className="contact_box">
        <div> <h1 data-aos="fade-up" data-aos-duration="1500">HIRE ME</h1></div>
        <div className="contact_container">
        <Info  />
        <Form />
        </div>
        
   </section>
  )
}

export default Contact
