import { Link } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import {
  LandingNav,
  Logo,
  NavActions,
  NavLink,
  StyledHeader,
} from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <LandingNav>
          <Link to="/">
            <Logo src="./img/logo-icon.png" alt="" />
          </Link>
          <NavActions>
            <Link to="/dashboard">
              <NavLink>Dashboard</NavLink>
            </Link>
            <Link to="/cosmos">
              <NavLink>Cosmos</NavLink>
            </Link>
            <Link to="/market">
              <NavLink>Market</NavLink>
            </Link>
            <Link to="/refinery">
              <NavLink>Refinery</NavLink>
            </Link>
            <Link to="/converter">
              <NavLink>Converter</NavLink>
            </Link>
          </NavActions>
          <NavActions>
            <Button>Connect</Button>
          </NavActions>
        </LandingNav>
      </Container>
    </StyledHeader>
  );
}
