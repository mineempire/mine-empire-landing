import { StyledFooter } from "./styles/Footer.styled";
import { Container, ContainerFlex } from "./styles/Container.styled";
import { NavLink } from "./styles/Header.styled";
import { Description } from "./styles/Body.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Description>© Copyright 2022. All Rights Reserved.</Description>
      </Container>
      <ContainerFlex>
        <NavLink>Privacy Policy</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Support</NavLink>
      </ContainerFlex>
    </StyledFooter>
  );
}
