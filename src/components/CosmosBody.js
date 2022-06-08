import {
  StyledBody,
  Logo,
  Title,
  Title2,
  H1,
  H2,
  Description,
  SocialIcon,
  SmallText,
  SmallTextDollar,
} from "./styles/Body.styled";
import {
  Container,
  ContainerFlex,
  ContainerLeft,
  BulletPoint,
  DataDiv,
  ContainerFlexColumn,
  PageTitleLeft,
} from "./styles/Container.styled";
import {
  PlanetCard,
  PlanetCardImgContainer,
  PlanetCardTitleContainer,
  PlanetCardProductionInfo,
  CardStats,
  PlanetCardBig,
  PlanetCardBigImgContainer,
  PlanetCardBigTitleContainer,
  PlanetCardBigProductionInfo,
  CardButtonContainer,
  TokenInfoCardStats,
  TokenInfoCard,
  TokenInfoCardImgContainer,
  TokenInfoTitleContainer,
  CardFeature,
  CardDescription,
  PlayerResources,
  PlayerResourceRow,
} from "./styles/Game.styled";
import { Button, ButtonSmall } from "./styles/Button.styled";

export default function Body() {
  return (
    <StyledBody>
      <Container>
        <PageTitleLeft>
          <Title2>Explore the Cosmos</Title2>
          <Description>
            Each planet produces a unique resource. Stake up to one drill per
            planet to start earning!
          </Description>
        </PageTitleLeft>
      </Container>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <ContainerFlex>
        <PlanetCard>
          <PlanetCardImgContainer>
            <img src="./img/gades.png" alt="" />
          </PlanetCardImgContainer>
          <PlanetCardTitleContainer>
            <H1>Gades</H1>
            <h3>Asteroid</h3>
            <h3>Produces Iron</h3>
          </PlanetCardTitleContainer>
          <img src="./img/line360px.svg" alt="" />
          <PlanetCardProductionInfo>
            <img src="./img/iron60px.png" alt="" />
            <h3 id="production">Production:</h3>
            <h3 id="amount">1,135 / Day</h3>
          </PlanetCardProductionInfo>
          <CardStats>
            <h3 id="description">Type</h3>
            <h3 id="stat">Asteroid</h3>
            <h3 id="description">Base Production</h3>
            <h3 id="stat">1,318 / Day</h3>
            <h3 id="description">CSC Equivalent</h3>
            <h3 id="stat">1.32 CSC / Day</h3>
            <h3 id="description">Max Capacity</h3>
            <h3 id="stat">33,193</h3>
            <h3 id="description">Your Production</h3>
            <h3 id="stat">0 / 33,193</h3>
          </CardStats>
          <CardButtonContainer>
            <Button>View</Button>
          </CardButtonContainer>
        </PlanetCard>
        <PlanetCard>
          <PlanetCardImgContainer>
            <img src="./img/oberon.png" alt="" />
          </PlanetCardImgContainer>
          <PlanetCardTitleContainer>
            <H1>Oberon</H1>
            <h3>Asteroid</h3>
            <h3>Produces Cobalt</h3>
          </PlanetCardTitleContainer>
          <img src="./img/line360px.svg" alt="" />
          <PlanetCardProductionInfo>
            <img src="./img/cobalt.png" alt="" />
            <h3 id="production">Production:</h3>
            <h3 id="amount">118 / Day</h3>
          </PlanetCardProductionInfo>
          <CardStats>
            <h3 id="description">Type</h3>
            <h3 id="stat">Asteroid</h3>
            <h3 id="description">Base Production</h3>
            <h3 id="stat">118 / Day</h3>
            <h3 id="description">CSC Equivalent</h3>
            <h3 id="stat">1.79 CSC / Day</h3>
            <h3 id="description">Max Capacity</h3>
            <h3 id="stat">981</h3>
            <h3 id="description">Your Production</h3>
            <h3 id="stat">0 / 981</h3>
          </CardStats>
          <CardButtonContainer>
            <Button>View</Button>
          </CardButtonContainer>
        </PlanetCard>
        <PlanetCard>
          <PlanetCardImgContainer>
            <img src="./img/canopsys.png" alt="" />
          </PlanetCardImgContainer>
          <PlanetCardTitleContainer>
            <H1>Canopsys</H1>
            <h3>Planet</h3>
            <h3>Produces Bismuth</h3>
          </PlanetCardTitleContainer>
          <img src="./img/line360px.svg" alt="" />
          <PlanetCardProductionInfo>
            <img src="./img/bismuth.png" alt="" />
            <h3 id="production">Production:</h3>
            <h3 id="amount">17 / Day</h3>
          </PlanetCardProductionInfo>
          <CardStats>
            <h3 id="description">Type</h3>
            <h3 id="stat">Planet</h3>
            <h3 id="description">Base Production</h3>
            <h3 id="stat">17 / Day</h3>
            <h3 id="description">CSC Equivalent</h3>
            <h3 id="stat">2.05 CSC / Day</h3>
            <h3 id="description">Max Capacity</h3>
            <h3 id="stat">191</h3>
            <h3 id="description">Your Production</h3>
            <h3 id="stat">0 / 191</h3>
          </CardStats>
          <CardButtonContainer>
            <Button>View</Button>
          </CardButtonContainer>
        </PlanetCard>
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
