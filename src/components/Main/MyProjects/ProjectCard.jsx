import "./projectbox.css";

function ProjectCard(props) {
  return (
    <div className="project">
        <div className="project_videocontainer">
          <div className="video_proj">
               <video src={props.videolink} controls >
               
                </video>
          </div>
        </div>
        <div className="project_information">
          <h2>{props.title}</h2>
          <p>
           {props.about}
          </p>
          <div className="s_icon">
            <i class="fa-brands fa-node"></i>
            <i class="fa-solid fa-leaf"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
          </div>
          <div className="pro_button">
            <a href="https://github.com/vikas0821" target="_blank" rel="noreferrer">
              <span type="button" className="btns">
                View Code
              </span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
