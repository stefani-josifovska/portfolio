import classes from "./UIComponents.module.css";

const LinkButton = ({ link, text }) => {
  const onOpenLinkHandler = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <button className={classes["button-link"]} onClick={onOpenLinkHandler}>
      {text}
    </button>
  );
};

export default LinkButton;
