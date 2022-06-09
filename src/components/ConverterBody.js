import { StyledBody, Title2, Description } from "./styles/Body.styled";
import { Container, PageTitleLeft } from "./styles/Container.styled";

export default function Body() {
  return (
    <StyledBody>
      <Container>
        <PageTitleLeft>
          <Title2>Converter</Title2>
          <Description>Convert resources to Cosmic Cash.</Description>
        </PageTitleLeft>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </Container>
    </StyledBody>
  );
}
