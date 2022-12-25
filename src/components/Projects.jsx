import classes from "./Projects.module.css";
import { projectsList } from "./projectsList";
import ProjectCard from "./UI/ProjectCard";

const Projects = ({ innerRef }) => {
  return (
    <section className={classes.container} id="projects" ref={innerRef}>
      <h2 className="mb-4">My Projects</h2>
      <div className={classes["container-div"]}>
        {projectsList.map((project) => {
          return <ProjectCard dataObject={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
