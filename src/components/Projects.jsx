import classes from "./Projects.module.css";
import { projectsList } from "./projectsList";
import ProjectCard from "./UI/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = ({ innerRef }) => {
  return (
    <section
      className={classes["container-section"]}
      id="projects"
      ref={innerRef}
    >
      <h2 className="mb-4">My Projects</h2>
      <div className={`${classes["container-div"]} ${classes["container"]}`}>
        {projectsList.map((project) => {
          return (
            <div className={`${classes["card"]}`}>
              <ProjectCard dataObject={project} />
            </div>
          );
        })}
      </div>
      <Container>
        <Row>
          <h3>Coming soon...</h3>
        </Row>
        <Row
          className={`d-flex justify-content-center ${classes["container"]}`}
        >
          <Col className={`${classes["card"]} m-2`}>
            <h4>e-Invoices Online</h4>
            <p>Coming soon</p>
          </Col>
          <Col className={`${classes["card"]} m-2`}>
            <h4>IAESTE Accross the Planet</h4>
            <p>Coming soon</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
