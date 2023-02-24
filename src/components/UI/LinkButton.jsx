import classes from "./UIComponents.module.css";

const LinkButton = ({ link, text }) => {
  const onOpenLinkHandler = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <button className={classes["button-link"]} onClick={onOpenLinkHandler}>
      <div>
        <span className="d-flex justify-content-center">
          {text}
        </span>
      </div>
      <div>
        <span className="d-flex justify-content-center">
          Visit
        </span>
      </div>
    </button>
  );
};

export default LinkButton;
