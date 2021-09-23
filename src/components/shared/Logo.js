import React from "react";
import styled from "styled-components";
import logo from "../../assets/manki-bitmoji.png";

const StyledLogo = styled.a`
  img {
    position: fixed;
    height: 5.9em;
    z-index: 3;
  }
`;

const Logo = () => {
  return (
    <StyledLogo href="#">
      <img src={logo} />
    </StyledLogo>
  );
};

export default Logo;
