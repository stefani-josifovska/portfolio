import classes from "./UIComponents.module.css";
import LinkButton from "./LinkButton";
import CheckIcon from "../CheckIcon";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProjectCard = ({ dataObject }) => {
  return (
    <div className={classes["project-container"]}>
      <img src={dataObject.img} alt="" />
      <div className={classes["project-description"]}>
        <div>
          <h4>{dataObject.title}</h4>
          <p>{dataObject.description}</p>
          <Container className="p-0">
            <Row>
              <Col>
                <ul>
                  {dataObject.technologies.map((technology) => {
                    return <li>{technology}</li>;
                  })}
                </ul>
              </Col>
              <Col>
                <div className={classes.version}>
                  <div>
                    <span>Mobile: </span>
                    <CheckIcon />
                  </div>
                  <div>
                    <span>Tablet: </span>
                    <CheckIcon />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={classes["link-buttons"]}>
          <LinkButton text="Page" link={dataObject.pageUrl} />
          <LinkButton text="Repo" link={dataObject.repoUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
