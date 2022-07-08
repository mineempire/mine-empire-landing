import React from "react";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
} from "./NavbarStyles.js";
import { Button } from "../../globalStyles";

const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt="logo" />
            <p>Mine Empire</p>
          </NavLogo>
          <NavMenu show={true}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.mineempire.io"
            >
              <Button>Launch Dapp</Button>
            </a>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
