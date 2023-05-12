import "./projectbox.css";

function ProjectCard(props) {
  return (
    <div className="project" data-aos={props.dataAos} data-aos-duration={props.dataAosDuration}>
        <div className="project_videocontainer">
          <div>
            <img
              src="https://i.ibb.co/V9C8Jm9/rockstar-games.png"
              alt="Rockstar Games"
            />
          </div>
        </div>
        <div className="project_information">
          <h2>Rockstar Games</h2>
          <p>
            Rockstar games is a video game company who develops lots of games
            like GTA, Red Dead, and many more. we build clone of their store
            website.
          </p>
          <div className="s_icon">
            <i class="fa-brands fa-node"></i>
            <i class="fa-solid fa-leaf"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
          </div>
          <div className="pro_button">
            {/* <a
              href="https://store-rockstargames.vercel.app/"
              target="_blank"
              rel="noreferrer"
            > */}
              <span type="button" className="btns">
                See this Live
              </span>
            {/* </a> */}
            {/* <a href="" target="_blank" rel="noreferrer"> */}
              <span type="button" className="btns">
                View Code
              </span>
            {/* </a> */}
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
