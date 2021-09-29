import React from "react";
import { useWindowWidth } from "../hooks/WindowWidthContext";
import styled from "styled-components";
import logo from "../../assets/manki-bitmoji.png";

const StyledLogo = styled.a`
  img {
    position: ${({width, theme}) => width > theme.widthBreakpoints.sm ? `fixed` : `relative`};
    height: 5.9em;
    z-index: 3;
  }
`;

const Logo = () => {
  const [width] = useWindowWidth();

  return (
    <StyledLogo href="#" width={width}>
      <img src={logo} alt="Logo"/>
    </StyledLogo>
  );
};

export default Logo;
