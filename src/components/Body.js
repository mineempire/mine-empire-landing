import {
  StyledBody,
  Logo,
  Title,
  Title2,
  H1,
  H2,
  Description,
  SocialIcon,
} from "./styles/Body.styled";
import { ContainerFlex, ContainerLeft } from "./styles/Container.styled";
import {
  PlanetCardBig,
  PlanetCardBigImgContainer,
  PlanetCardBigTitleContainer,
  PlanetCardBigProductionInfo,
  CardButtonContainer,
  CardStats,
} from "./styles/Game.styled";
import { Button } from "./styles/Button.styled";

export default function Body() {
  return (
    <StyledBody>
      <ContainerFlex>
        <Logo src="./img/logo-large.png" alt="" />
      </ContainerFlex>
      <ContainerFlex>
        <Title>Open Economy Idle Web3 Game</Title>
      </ContainerFlex>
      <ContainerFlex>
        <SocialIcon src="./img/twitter-icon.png" alt="" />
        <SocialIcon src="./img/discord-icon.png" alt="" />
        <SocialIcon src="./img/telegram-icon.png" alt="" />
      </ContainerFlex>
      <div>&nbsp;</div>
      <ContainerFlex bg="#11182780">
        <ContainerLeft>
          <img src="./img/bullet.svg" alt="" />
          <H2>No Token Emissions</H2>
          <Description>
            By eliminiating emissions, earned tokens have dramatically reduced
            inflation. By leveraging Protocol Owned Dex Liquidity (PODL), Mine
            Empire will produce income by participating in the broader crypto
            ecosystem.
          </Description>
        </ContainerLeft>
        <ContainerLeft>
          <img src="./img/bullet.svg" alt="" />
          <H2>No Team/VC Allocations</H2>
          <Description>
            We believe in being a net positive contributor to the crypto
            ecosystem. This means there will be ZERO founder/team/seed
            allocations. All funding will be provided by the founder and will
            always remain in the protocol treasury.
          </Description>
        </ContainerLeft>
        <ContainerLeft>
          <img src="./img/bullet.svg" alt="" />
          <H2>Low Barrier of Entry</H2>
          <Description>
            Mine Empire is designed for both small and big players alike. Mining
            equipment will be cheap to mint and will provide exponential
            leveling for the players who like to grind.
          </Description>
        </ContainerLeft>
      </ContainerFlex>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <ContainerFlex bg="#11182780" justify="space-between">
        <ContainerLeft>
          <Title2>Explore the Cosmos</Title2>
          <Description>
            Travel to other planets, asteroids and galaxies in search of
            valuable resources. Use resources to either build incredible new
            technologies or simply cash out.
          </Description>
          <img src="./img/canopsys.png" alt="" width="400px" />
        </ContainerLeft>
        <ContainerLeft>
          <PlanetCardBig>
            <PlanetCardBigImgContainer>
              <img src="./img/gades.png" alt="" />
            </PlanetCardBigImgContainer>
            <PlanetCardBigTitleContainer>
              <H1>Gades</H1>
              <h3>Asteroid</h3>
              <h3>Produces Iron</h3>
            </PlanetCardBigTitleContainer>
            <img src="./img/line480px.svg" alt="" />
            <PlanetCardBigProductionInfo>
              <img src="./img/iron60px.png" alt="" />
              <h3 id="production">Production:</h3>
              <h3 id="amount">1,135 / Day</h3>
            </PlanetCardBigProductionInfo>
            <CardStats>
              <h3 id="description">Type</h3>
              <h3 id="stat">Asteroid</h3>
              <h3 id="description">Base Production</h3>
              <h3 id="stat">1,318 / Day</h3>
              <h3 id="description">Max Capacity</h3>
              <h3 id="stat">33,193</h3>
              <h3 id="description">Your Production</h3>
              <h3 id="stat">0 / 33,193</h3>
            </CardStats>
            <CardButtonContainer>
              <Button>Learn More</Button>
            </CardButtonContainer>
          </PlanetCardBig>
        </ContainerLeft>
      </ContainerFlex>
    </StyledBody>
  );
}
