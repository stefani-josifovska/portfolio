import classes from "./Contact.module.css";
import { languagesList } from "./languagesList";

const Languages = () => {
  return (
    <div className={classes['lang-section']}>
      <p className="mb-0 mt-2">We can talk in: </p>
      <div className={classes["flag-container"]}>
        {languagesList.map((language) => {
          return <img src={language.src} alt={language.alt} />;
        })}
      </div>
    </div>
  );
};

export default Languages;
