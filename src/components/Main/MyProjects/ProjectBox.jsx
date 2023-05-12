import ProjectCard from "./ProjectCard";
import "./projectbox.css";
function ProjectBox() {
  return (
    <div className="projects_container">
      <ProjectCard dataAos="flip-left" data-aos-duration="3000"/>
      <ProjectCard dataAos="flip-up" data-aos-duration="2400"/>
      <ProjectCard dataAos="flip-right" data-aos-duration="3600"/>
      <ProjectCard dataAos="flip-down" data-aos-duration="1800"/>
    </div>
  );
}

export default ProjectBox;
