import React, { useState, useRef } from "react";

import "./app.css";

const ContactMeFloater = ({}) => {
  const contactMeFloaterRef = useRef(null);
  const contactMeContainerRef = useRef(null);
  const contactMeFloaterEmailIconRef = useRef(null);
  const contactMeFloaterCloseIconRef = useRef(null);

  const contactMeClickHandler = () => {
    contactMeFloaterRef.current.classList.toggle("contact-me-floater-clicked");
    contactMeFloaterEmailIconRef.current.classList.toggle("hidden");
    contactMeFloaterCloseIconRef.current.classList.toggle("hidden");
    contactMeContainerRef.current.classList.toggle("hidden");
  };
  return (
    <div>
      <div className="contact-me-floater" ref={contactMeFloaterRef}>
        <i
          className="fa-regular fa-message"
          onClick={contactMeClickHandler}
          ref={contactMeFloaterEmailIconRef}
        ></i>
        <div
          id="contact-me-holder"
          className="hidden"
          ref={contactMeContainerRef}
        >
          <form
            action="https://formspree.io/f/meqpyddp"
            method="POST"
            className="contactMe"
          >
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
        </div>
        <i
          className="hidden fa-solid fa-xmark"
          onClick={contactMeClickHandler}
          ref={contactMeFloaterCloseIconRef}
        ></i>
      </div>
    </div>
  );
};

export default ContactMeFloater;
