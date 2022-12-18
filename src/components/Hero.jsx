import classes from "./Hero.module.css";
import jsLogo from "../images/js_logo_grayscale.png";
import bootstrapLogo from "../images/bootstrap_logo_grayscale.png";
import bulmaLogo from "../images/bulma_logo_grayscale.png";
import cassandraLogo from "../images/cassandra_logo_grayscale.png";
import cppLogo from "../images/cpp_logo_grayscale.png";
import csslogo from "../images/css_logo_grayscale.png";
import htmlLogo from "../images/html_logo_grayscale.png";
// import matlabLogo from "../images/matlab_logo_grayscale.png";
import mongoLogo from "../images/mongo_logo_grayscale.png";
import mysqlLogo from "../images/mysql_logo_grayscale.png";
import postgreLogo from "../images/postgre_logo_grayscale.png";
import pythonLogo from "../images/python_logo_grayscale.png";
import reactLogo from "../images/react_logo_grayscale.png";
// import tableauLogo from "../images/tableau_logo_grayscale.png";
import tailwindLogo from "../images/tailwind_logo_grayscale.png";
import tsLogo from "../images/ts_logo_grayscale.png";
import vueLogo from "../images/vue_logo_grayscale.png";

let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

const Hero = ({ scrollToAbt }) => {
  const moveImagesHandler = (pageX, pageY) => {
    mousePos(pageX, pageY);
  };

  const mousePos = (pageX, pageY) => {
    moveXAmount = Number(pageX) - Number(prevX);
    moveYAmount = Number(pageY) - Number(prevY);

    moveImg(moveXAmount, moveYAmount);

    prevX = pageX;
    prevY = pageY;
  };

  const moveImg = (moveXAmount, moveYAmount) => {
    const heroContainer = document.getElementById("hero-container");
    const imgArray = Array.from(heroContainer.getElementsByTagName("img"));

    imgArray.forEach((img) => {
      let movementStrength = 5 + Math.random() * 30;
      img.style.left =
        (img.offsetLeft - Number(moveXAmount) / movementStrength).toString() +
        "px";
      img.style.top =
        (img.offsetTop - Number(moveYAmount) / movementStrength).toString() +
        "px";
    });
  };

  const onMouseLeaveHandler = () => {
    console.log("mouse left");
    const heroContainer = document.getElementById("hero-container");
    const imgArray = Array.from(heroContainer.getElementsByTagName("img"));

    imgArray.forEach((img) => {
      img.style.left = null;
      img.style.top = null;
    });
  };

  const scrollToAbtHandler = () => {
    scrollToAbt();
  };

  return (
    <section
      id="hero-container"
      className={classes.container}
      onMouseMove={(e) => moveImagesHandler(e.pageX, e.pageY)}
      onMouseOut={onMouseLeaveHandler}
    >
      <div className={classes["intro-text"]}>
        <p>Hi, I'm</p>
        <h1>Stefani Josifovska</h1>
        <h2>
          A Junior <span>Frontend Web Developer</span>
        </h2>
        <br></br>
        <a href="#about" onClick={scrollToAbtHandler}>
          <div className="d-flex">
            <h3 className="pe-2">Let's get to know each other</h3>
            <svg
              transform="rotate(180)"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              viewBox="0 0 371.412 371.412"
              enableBackground={"new 0 0 371.412 371.412"}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M333.068,161.691c-52.021-52.632-94.86-113.832-153-159.732c-3.672-3.06-7.956-2.448-11.016,1.224
		c-42.84,56.304-85.068,112.608-130.968,165.852c-1.836,2.448-1.836,4.896-0.612,6.732c-3.06,3.672,0,11.016,6.12,9.792
		c28.152-4.284,56.304,3.06,85.068,1.836c-7.956,34.884-28.152,66.708-42.84,99.144c-6.12,13.465-25.092,48.348-15.3,65.484
		c-2.448,3.061-0.612,9.18,4.284,9.791c44.064,1.836,87.516,7.957,130.968,9.182c22.644,0.611,77.111,3.672,87.516-23.256
		c1.224-2.449-0.612-4.896-2.448-6.121c1.836-1.225,3.061-3.061,3.061-4.896c-2.448-22.031-17.748-44.062-26.929-64.26
		c-12.239-28.152-24.479-58.139-27.54-89.352c28.765,3.672,59.364,4.896,88.129,0.612c6.731-0.612,8.567-8.568,5.508-12.24
		C335.517,169.647,336.128,165.363,333.068,161.691z M234.536,171.483c-4.896,0.612-6.12,4.896-4.896,7.956
		c-4.284,28.764,6.119,56.916,15.911,83.844c9.181,24.48,19.584,58.141,37.332,77.725l0.612,0.611
		c-11.016,4.283-20.808,9.793-33.66,11.629c-22.032,3.672-44.676,2.447-66.708,1.223c-31.824-1.223-65.484-7.344-98.532-4.283
		c1.224-8.568,1.224-17.137,3.672-25.705c5.508-19.584,15.3-37.943,23.868-56.303c11.628-26.316,24.48-53.244,27.54-82.008
		c4.896-4.285,3.06-13.464-4.284-12.853c-28.152,1.836-56.304-3.672-84.456-0.612c45.9-47.736,85.068-102.204,125.46-155.448
		c54.468,44.676,95.472,102.204,144.432,153C292.064,171.483,262.688,168.423,234.536,171.483z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        </a>
      </div>

      <img
        src={jsLogo}
        alt="javascript logo"
        className={`${classes.img} ${classes.img1}`}
      />
      <img
        src={bootstrapLogo}
        alt="bootstrap logo"
        className={`${classes.img} ${classes.img2}`}
      />
      <img
        src={bulmaLogo}
        alt="bulma logo"
        className={`${classes.img} ${classes.img3}`}
      />
      <img
        src={cppLogo}
        alt="c++ logo"
        className={`${classes.img} ${classes.img4}`}
      />
      <img
        src={csslogo}
        alt="css logo"
        className={`${classes.img} ${classes.img5}`}
      />
      <img
        src={htmlLogo}
        alt="html logo"
        className={`${classes.img} ${classes.img6}`}
      />
      {/* <img
        src={matlabLogo}
        alt="matlab logo"
        className={`${classes.img} ${classes.img7}`}
      /> */}
      <img
        src={mongoLogo}
        alt="mongo logo"
        className={`${classes.img} ${classes.img8}`}
      />
      <img
        src={mysqlLogo}
        alt="mySql logo"
        className={`${classes.img} ${classes.img9}`}
      />
      <img
        src={postgreLogo}
        alt="postgre logo"
        className={`${classes.img} ${classes.img10}`}
      />
      <img
        src={pythonLogo}
        alt="python logo"
        className={`${classes.img} ${classes.img11}`}
      />
      <img
        src={reactLogo}
        alt="react logo"
        className={`${classes.img} ${classes.img12}`}
      />
      {/* <img
        src={tableauLogo}
        alt="tableau logo"
        className={`${classes.img} ${classes.img13}`}
      /> */}
      <img
        src={tailwindLogo}
        alt="tailwind logo"
        className={`${classes.img} ${classes.img14}`}
      />
      <img
        src={tsLogo}
        alt="typescript logo"
        className={`${classes.img} ${classes.img15}`}
      />
      <img
        src={vueLogo}
        alt="vue logo"
        className={`${classes.img} ${classes.img16}`}
      />
      <img
        src={cassandraLogo}
        alt="cassandra logo"
        className={`${classes.img} ${classes.img17}`}
      />
    </section>
  );
};

export default Hero;
