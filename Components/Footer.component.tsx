import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

const SocialSection = styled.div`
  background: #000;
  color: #fff;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 147%;
`;

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 150%;
`;

const Footer = () => {
  return (
    <div>
      <SocialSection>
        <h3><a role="button" href="https://twitter.com/kilroyrobotics"><FontAwesomeIcon icon={faTwitter} size="xs"/></a> <a role="button" href="https://facebook.com/kilroyrobotics"><FontAwesomeIcon icon={faFacebook} size="xs"/></a> <a role="button" href="https://github.com/FIRST-TEAM-339"><FontAwesomeIcon icon={faGithub} size="xs"/></a></h3>
      </SocialSection>
      <FooterSection>
        <p>FIRST Team 339 | 2021 All Rights Reserved</p>
      </FooterSection>
    </div>
  );
};

export default Footer;