import {
  StyledHeader,
  LandingNav,
  Logo,
  NavLink,
  NavActions,
} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <LandingNav>
          <Logo src="./img/logo-icon.png" alt="" />
          <NavActions>
            <NavLink>Docs</NavLink>
            <Link to="/dashboard">
              <Button>Launch</Button>
            </Link>
          </NavActions>
        </LandingNav>
      </Container>
    </StyledHeader>
  );
}
