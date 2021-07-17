import styled from 'styled-components';
import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../public/favicon.ico';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;


const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <a href="/">
          <StyledLink>Kilroy 339</StyledLink>
        </a>
      </div>
      <div>
        <a href="/">
          <StyledLink>Home</StyledLink>
        </a>
        <a href="/history">
          <StyledLink>History</StyledLink>
        </a>
        <a href="https://www.thebluealliance.com/team/339">
          <StyledLink>Blue Alliance <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/></StyledLink>
        </a>
        <a href="/archive">
          <StyledLink>Previous Years</StyledLink>
        </a>
        <a href="/contact">
          <StyledLink>Contact</StyledLink>
        </a>
        <a href="/donate">
          <StyledLink>Donate</StyledLink>
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
