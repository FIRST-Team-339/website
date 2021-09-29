import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/favicon.ico";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Nav = styled.nav`
  height: auto;
  background: #111837;
  display: flex;
  justify-content: space-between;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`; // 174c4f

export default function Navbar() {
  return (
    <Nav className="navbar navbar-dark navbar-expand-md">
      <Image src={Logo} alt="Tyra Digital" height="50px" width="50px" />
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <strong>Tyra Digital</strong>
          </a>
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" id="navlist">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/invite">
                <a className="nav-link" id="navlist">
                  Add to your Discord Server
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/features">
                <a className="nav-link" id="navlist">
                  Features
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/commands">
                <a className="nav-link" id="navlist">
                  Commands
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link" id="navlist">
                  Other Bots & Services
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/support">
                <a className="nav-link" id="navlist">
                  Support
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
