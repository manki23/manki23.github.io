import React from "react";
import '../../styles/shared/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        Disclaimer: I did not create the design of this website. It was
        inspired by{" "}
        <a target="_blank" href="https://brittanychiang.com/">
          Brittany Chiang portfolio
        </a>
        . If you liked this design, please check her work.
      </p>
    </footer>
  );
};

export default Footer;
