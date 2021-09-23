import React from "react";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import GreenButton from "../shared/GreenButton";

const StyledContactPage = styled.div`
    padding: 100px 0px;
    text-align: center;
    div {
        display: grid;
    }
`

const ContactPage = () => {
  return (
    <StyledContactPage id="contact-page">
      <h2>Get in touch</h2>
      <div>
        <p>
          I a currently open to work, you have a project in mind or just want to
          say hi ?
        </p>
        <p>Feel free to send me a message !</p>
        <p>
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
    </StyledContactPage>
  );
};

export default ContactPage;
