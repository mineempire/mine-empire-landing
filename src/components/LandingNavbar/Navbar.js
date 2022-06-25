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
            <Button>Coming July 9th</Button>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
