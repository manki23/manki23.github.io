import React from "react";
import "../../styles/pages/ContactPage.scss";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import GreenButton from "../shared/GreenButton";

const ContactPage = () => {
  return (
    <div className="contact-page" id="contact-page">
      <h2 className="numbered-heading">Get in touch</h2>
      <div className="content slate-color">
        <p>
          I a currently open to work, you have a project in mind or just want to
          say hi ?
        </p>
        <p>Feel free to send me a message !</p>
        <p className="buttons">
          <GreenButton
            title={
              <>
                LinkedIn <BiLinkExternal />
              </>
            }
            href="https://www.linkedin.com/in/myriam-anki-8b9258198/"
          />
          <GreenButton
            title={
              <>
                Mail <FaRegEnvelope />
              </>
            }
            href="mailto:myriam.anki.pro@gmail.com"
          />
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
