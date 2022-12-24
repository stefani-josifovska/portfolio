import classes from "./Contact.module.css";
import { useState, useReducer } from "react";
import { send } from "emailjs-com";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import { Oval } from "react-loader-spinner";

import FeedbackCard from "../UI/FeedbackCard";
import Button from "../UI/Button";

const initialFormValues = {
  user_name: null,
  to_name: "Stefani",
  message: null,
  user_email: null,
};

const initialCaptchaValues = {
  isExpired: null,
  isInvalid: null,
  value: "",
};

const recaptchaReducer = (state, action) => {
  if (action.type === "IS_EXPIRED") {
    return { ...initialCaptchaValues, isExpired: action.val };
  }
  if (action.type === "IS_INVALID") {
    return { ...initialCaptchaValues, isInvalid: action.val };
  }
  if (action.type === "SET_VALUE") {
    return {
      isExpired: false,
      isInvalid: !(action.val > 0),
      value: action.val,
    };
  }
  return {
    isExpired: null,
    isInvalid: null,
    value: "",
  };
};

const ContactForm = () => {
  const [toSend, setToSend] = useState(initialFormValues);

  const [isMsgSent, setIsMsgSent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(null);

  const [recaptchaState, dispatchRecaptcha] = useReducer(
    recaptchaReducer,
    initialCaptchaValues
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (recaptchaState.value.length > 0) {
      setIsLoading(true);
      console.log("sending");
      dispatchRecaptcha({ type: "IS_INVALID", val: false });
      dispatchRecaptcha({ type: "IS_EXPIRED", val: false });
      send("service_975be3r", "template_fr3ipnc", toSend, "XD3wOx1JhpfSo3kL4")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsMsgSent(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setIsMsgSent(false);
        });
    } else {
      if (!(recaptchaState.value.length > 0)) {
        dispatchRecaptcha({ type: "IS_INVALID", val: true });
      }
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.id]: e.target.value });
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value: ", value);
    dispatchRecaptcha({ type: "SET_VALUE", val: value });
  };

  const onCaptchaExpire = () => {
    dispatchRecaptcha({ type: "IS_EXPIRED", val: true });
  };

  return (
    <>
      {isMsgSent === null && (
        <div className={classes["form-container"]}>
          {!isLoading && (
            <>
              <h3>Let's Get in Touch!</h3>
              <Form noValidate validated={validated} onSubmit={onSubmit}>
                <FloatingLabel
                  controlId="user_name"
                  name="user_name"
                  type="text"
                  label="Your name"
                  value={toSend.user_name}
                  onChange={handleChange}
                  className="mb-1 mt-1"
                >
                  <Form.Control required type="text" placeholder="Name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="user_email"
                  name="user_email"
                  type="email"
                  label="Your email address"
                  value={toSend.user_email}
                  onChange={handleChange}
                  className="mb-1 mt-1"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="your@email.address"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid e-mail.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="message"
                  label="Your message"
                  type="text"
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                  className="mt-1 mb-1"
                >
                  <Form.Control
                    required
                    as="textarea"
                    type="text"
                    placeholder="message"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid message.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <div>
                  <ReCAPTCHA
                    // sitekey="6Le3HJ8jAAAAAAdlo-ZkgaEbBofOvhQvAsO63k0V"
                    sitekey="6LepKKEjAAAAAG3tm2iihePjht7wawID7d2bps0b"
                    onChange={onCaptchaChange}
                    onExpired={onCaptchaExpire}
                  />
                  {(recaptchaState.isExpired || recaptchaState.isInvalid) && (
                    <p>Please validate you are not a robot.</p>
                  )}
                </div>
                <Button type="submit" text="Send me an e-mail" />
              </Form>
            </>
          )}
          {isLoading && (
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
        </div>
      )}
      {isMsgSent && <FeedbackCard message={"Thank you for reaching out!"} />}
      {isMsgSent === false && (
        <FeedbackCard message={"There was a problem. Please try again."} />
      )}
    </>
  );
};

export default ContactForm;
