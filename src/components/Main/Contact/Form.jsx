import "./form.css"
function Form(props) {
  return (
    <div className="form_box" >
        <form onSubmit={() => window.location = 'mailto:vk356464@gmail.com'}  method="post" >
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your Email" />
            <textarea name="About" id="" cols="30" rows="10" placeholder="Discribe yourself.."></textarea>
            <button type="submit">Send</button>
        </form>

      
    </div>
  )
}

export default Form
