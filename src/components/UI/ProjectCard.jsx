import classes from "./UIComponents.module.css";
import LinkButton from "./LinkButton";
import CheckIcon from "../CheckIcon";

const ProjectCard = ({ dataObject }) => {
  return (
    <div className={classes["project-container"]}>
      <img src={dataObject.img} alt="" />
      <div className={classes["project-description"]}>
        <div>
          <h4>{dataObject.title}</h4>
          <p>{dataObject.description}</p>
          <ul>
            {dataObject.technologies.map((technology) => {
              return <li>{technology}</li>;
            })}
          </ul>
        </div>
        <div className={classes["link-buttons"]}>
          <LinkButton text="Page" link={dataObject.pageUrl} />
          <LinkButton text="Repo" link={dataObject.repoUrl} />
        </div>
        <div className={classes.version}>
          <div>
            <span>Mobile version: </span>
            <CheckIcon />
          </div>
          <div>
            <span>Tablet version:</span>
            <CheckIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
