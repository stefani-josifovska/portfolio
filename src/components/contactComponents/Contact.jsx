import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Languages from "./Languages";

const Contact = ({ innerRef }) => {
  return (
    <section className={classes.container} id="contact" ref={innerRef}>
      <ContactForm />
      <Languages />
    </section>
  );
};

export default Contact;
