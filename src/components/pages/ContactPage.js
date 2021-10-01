import React from "react";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import GreenButton from "../shared/GreenButton";
import { useTranslation } from "react-i18next";

const StyledContactPage = styled.div`
    padding: 100px 0px;
    text-align: center;
    div {
      font-size: ${({ theme }) => `clamp(${theme.fontSize.md}, 5vw, ${theme.fontSize.xxl})`};
        display: grid;
    }
`

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <StyledContactPage id="contact-page">
      <h2>{t("contactPageTitle")}</h2>
      <div>
        <p>{t("contactPageParagraph1")}</p>
        <p>{t("contactPageParagraph2")}</p>
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
