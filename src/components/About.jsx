import classes from "./About.module.css";

const About = ({ innerRef }) => {
  return (
    <section className={classes.container} id="about" ref={innerRef}>
      <div className={classes.content}>about me</div>
    </section>
  );
};

export default About;
