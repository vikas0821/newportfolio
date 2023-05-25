import ProjectCard from "./ProjectCard";
import "./projectbox.css";
import dailythought from "../../Assest/vid/dailythought.mp4"
import projcake from "../../Assest/vid/projcake.mp4"
import todolist from "../../Assest/vid/todolist.mp4"
import ReaCinema from "../../Assest/vid/ReaCinema.mp4"
function ProjectBox() {
    const ReaCinemaTilte="ReaCinema";
    const ReaCinemaAbout="This is movie api project, I've created self database of movies to make this project. I've used React tailwind to make this.";
    const dailythoughtTitle="Daily Blogs"
    const dailythoughtAbout="This is blog project, in which we can create daily blogs. i've made using express, ejs.. etc"
    const todolistTitle="To-Do List"
    const todolistAbout="This is my todolist project in which we can create our task. I've done using express...etc"
    const cakeTitle="Crazy Layer"
    const cakeAbout="In this project, i've designed simple UI using HTML, CSS, javaScript"

  return (
    <div className="projects_container">
      <ProjectCard videolink={ReaCinema}  title={ReaCinemaTilte} about={ReaCinemaAbout}/>
      <ProjectCard videolink={dailythought} title={dailythoughtTitle} about={dailythoughtAbout} />
      <ProjectCard videolink={todolist} title={todolistTitle} about={todolistAbout} />
      <ProjectCard videolink={projcake} title={cakeTitle} about={cakeAbout} />
    </div>
  );
}

export default ProjectBox;
