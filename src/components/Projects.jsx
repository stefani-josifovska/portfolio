import classes from "./Projects.module.css";

const Projects = ({ innerRef }) => {
  return (
    <section
      className={classes.container}
      id="projects"
      ref={innerRef}
    ></section>
  );
};

export default Projects;
