import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NewFooter = styled.div`
  width: 100%;
  height: 55px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <div>
      {/* <SocialSection>
        <h3><a role="button" href="https://twitter.com/kilroyrobotics" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="xs"/></a> <a role="button" href="https://facebook.com/kilroyrobotics" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="xs"/></a> <a role="button" href="https://github.com/FIRST-TEAM-339" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="xs"/></a></h3>
      </SocialSection> */}
      <NewFooter>
        <p>
          Tyra Digital | <FontAwesomeIcon icon={faCopyright} size="xs" /> 2021
          All Rights Reserved
        </p>
      </NewFooter>
    </div>
  );
}
