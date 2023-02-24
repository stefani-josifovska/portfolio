import classes from "./Navbar.module.css";
import girlAvatar from "./girlAvatar";
import portfolioAvatar from "./portfolioAvatar";
import contactAvatar from "./contactAvatar";
import linkedInAvatar from "./linkedInAvatar";
import githubAvatar from "./githubAvatar";

const Navbar = ({ scrollToAbt, scrollToProj, scrollToCont }) => {
  const scrollToAbtHandler = () => scrollToAbt();
  const scrollToProjHandler = () => scrollToProj();
  const scrollToContHandler = () => scrollToCont();

  return (
    <div
      className={`${classes["navbar-container"]} d-flex flex-column justify-content-between align-items-center`}
    >
      <ul className="p-0 pt-2 w-100">
        <li className={`${classes["li-container"]}`}>
          <div>
            {girlAvatar}
            <a
              href="#about"
              onClick={scrollToAbtHandler}
              className="text-white"
            >
              <div className={classes.about}>About Me</div>
            </a>
          </div>
        </li>
        <li className={`${classes["li-container"]} `}>
          <div>
            {portfolioAvatar}
            <a
              href="#projects"
              onClick={scrollToProjHandler}
              className="text-white"
            >
              <div className={`${classes.about} ${classes.projects}`}>
                My Projects
              </div>
            </a>
          </div>
        </li>
        <li className={classes["li-container"]}>
          <div>
            {contactAvatar}
            <a
              href="#contact"
              onClick={scrollToContHandler}
              className="text-white"
            >
              <div className={`${classes.about} ${classes.contact}`}>
                Contact Me
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul className="p-0">
        <li>
          <a
            href="https://www.linkedin.com/in/stefanijosifovska/"
            target="_blank"
            className={classes.linkedin}
          >
            {linkedInAvatar}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/stefani-josifovska"
            target="_blank"
            className={classes.github}
          >
            {githubAvatar}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
