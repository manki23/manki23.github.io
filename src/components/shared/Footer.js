import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  bottom: 0;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9em;
  p {
    font-family: monospace;
    text-align: center;
    a {
      color: ${(props) => props.theme.colors.appGreenColor};
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Disclaimer: I did not create the design of this website. <br /> It was
        inspired by{" "}
        <a target="_blank" href="https://brittanychiang.com/" rel="noopener noreferrer">
          Brittany Chiang portfolio
        </a>
        .<br />
        If you liked this design, please check out her work.
      </p>
    </StyledFooter>
  );
};

export default Footer;
