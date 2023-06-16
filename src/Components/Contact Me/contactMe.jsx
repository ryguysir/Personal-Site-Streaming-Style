import React, { memo } from "react";
import { useTransition, animated } from "react-spring";
import "./app.css";

const ContactMe = memo(function ContactMe({ showContactMe, setShowContactMe }) {
  const contactMeTransition = useTransition(showContactMe, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return (

    <div>
      {contactMeTransition((style, item) => item ?
        <animated.div style={style} id="contact-me-holder">
          <i className="fa-solid fa-xmark close-contact-me" onClick={() => {
            setShowContactMe(false);
          }}></i>
          <form action="https://formspree.io/f/meqpyddp" method="POST" className="contactMe">
            <h1>Reach out </h1>
            <div>
              <input
                placeholder="Your Email"
                type="email"
                className="email"
                name="_replyto"
                autoComplete={"off"}
              />
            </div>
            <div>
              <textarea
                className="message"
                name="message"
                placeholder="Your message to me"
              ></textarea>
            </div>
            <div className="status"></div>
            <button type="submit" className="submit">
              Send
            </button>
          </form>
        </animated.div> : "")}
    </div>
  );
});

export default ContactMe;
