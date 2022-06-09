import { StyledBody, Title2, H1, Description } from "./styles/Body.styled";
import {
  Container,
  ContainerFlex,
  PageTitleLeft,
} from "./styles/Container.styled";
import {
  NFTCard,
  NFTCardHeader,
  NFTCardStats,
  CardButtonContainer,
} from "./styles/Game.styled";
import { Button } from "./styles/Button.styled";

export default function Body() {
  return (
    <StyledBody>
      <Container>
        <PageTitleLeft>
          <Title2>Mint Items to Power your Mines</Title2>
          <Description>
            Mint drills and stake them in planets in the Cosmos to start
            collecting resources!
          </Description>
          <Description>
            Upgrade your drills to to increase your mining power. Mining Power
            multiplies the base production of any planet.
          </Description>
        </PageTitleLeft>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </Container>
      <ContainerFlex>
        <NFTCard>
          <NFTCardHeader>
            <img src="./img/level-1-icon.png" alt="" />
            <H1>Asteroid Drill</H1>
            <img src="./img/power-1.00-icon.png" alt="" />
          </NFTCardHeader>
          <img id="drill-image" src="./img/asteroid-drill.png" alt="" />
          <img src="./img/line400px.svg" alt="" />
          <NFTCardStats>
            <h3 id="description">Price</h3>
            <h3 id="stat">100 FTM</h3>
            <h3 id="description">Speciality</h3>
            <h3 id="stat">Asteroid</h3>
            <h3 id="description">Level / Max</h3>
            <h3 id="stat">1 / 20</h3>
            <h3 id="description">Power / Max</h3>
            <h3 id="stat">1.00 / 48.63</h3>
          </NFTCardStats>
          <CardButtonContainer>
            <H1>56/100</H1>
            <Button>Mint</Button>
          </CardButtonContainer>
        </NFTCard>
      </ContainerFlex>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <ContainerFlex>
        <img src="./img/line1200px.svg" alt=""></img>
      </ContainerFlex>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </StyledBody>
  );
}
