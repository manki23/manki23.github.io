import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledFooter = styled.footer`
  bottom: 0;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9em;
  p {
    font-family: monospace;
    text-align: center;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <p>
        {t("footerDisclaimerText")} <br />
        {t("footerInspiredByText")}{" "}
        <a
          target="_blank"
          href="https://brittanychiang.com/"
          rel="noopener noreferrer"
        >
          {t("footerBrittanyChiangPortfolioText")}
        </a>
        .<br />
        {t("footerPleaseCheckHerOutText")}
      </p>
    </StyledFooter>
  );
};

export default Footer;
