import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = ({ innerRef }) => {
  return (
    <section className={classes.container} id="contact" ref={innerRef}>
      <ContactForm />
    </section>
  );
};

export default Contact;
