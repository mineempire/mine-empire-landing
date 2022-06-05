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
            <NavLink>Cosmos</NavLink>
            <NavLink>Market</NavLink>
            <NavLink>Refinery</NavLink>
            <NavLink>Converter</NavLink>
          </NavActions>
          <NavActions>
            <Button>Connect</Button>
          </NavActions>
        </LandingNav>
      </Container>
    </StyledHeader>
  );
}
