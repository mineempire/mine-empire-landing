import {
  StyledHeader,
  LandingNav,
  Logo,
  NavLink,
  NavActions,
} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <LandingNav>
          <Logo src="./img/logo-icon.png" alt="" />
          <NavActions>
            <NavLink>Docs</NavLink>
            <Button>Launch</Button>
          </NavActions>
        </LandingNav>
      </Container>
    </StyledHeader>
  );
}
