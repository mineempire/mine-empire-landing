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
  ContainerFlex,
  ContainerLeft,
  BulletPoint,
  DataDiv,
  ContainerFlexColumn,
} from "./styles/Container.styled";
import {
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
      <ContainerFlex>
        <Logo src="./img/logo-large.png" alt="" />
      </ContainerFlex>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <ContainerFlex>
        <TokenInfoCard>
          <TokenInfoCardImgContainer>
            <img src="./img/gem-icon.png" />
          </TokenInfoCardImgContainer>
          <TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <h1>GEM</h1>
              <h3>Mine Empire</h3>
            </TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <img src="./img/coinmarketcap-icon.png" alt="" />
              <img src="./img/coingecko-icon.png" alt="" />
              <CardFeature>
                <img src="./img/plus.svg" />
                <img src="./img/metamask-icon.png" alt="" />
              </CardFeature>
            </TokenInfoTitleContainer>
          </TokenInfoTitleContainer>
          <img src="./img/line360px.svg" alt=""></img>
          <CardDescription>
            <CardFeature>
              <SmallText>Price:</SmallText>
              <SmallTextDollar>$0.00</SmallTextDollar>
            </CardFeature>
            <TokenInfoCardStats>
              <h3 id="description">Circulating Supply</h3>
              <h3 id="stat">1,000</h3>
              <h3 id="description">Market Cap</h3>
              <h3 id="stat">$1,000</h3>
              <h3 id="description">Total Liquidity</h3>
              <h3 id="stat">$1,000</h3>
              <h3 id="description">Protocol Owned Liquidity</h3>
              <h3 id="stat">$1,000</h3>
            </TokenInfoCardStats>
          </CardDescription>
          <CardButtonContainer>
            <Button>Buy</Button>
          </CardButtonContainer>
        </TokenInfoCard>
        <TokenInfoCard>
          <TokenInfoCardImgContainer>
            <img src="./img/gem-icon.png" alt="" />
          </TokenInfoCardImgContainer>
          <TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <h1>GEM</h1>
              <h3>Mine Empire</h3>
            </TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <img src="./img/coinmarketcap-icon.png" alt="" />
              <img src="./img/coingecko-icon.png" alt="" />
              <CardFeature>
                <img src="./img/plus.svg" alt="" />
                <img src="./img/metamask-icon.png" alt="" />
              </CardFeature>
            </TokenInfoTitleContainer>
          </TokenInfoTitleContainer>
          <img src="./img/line360px.svg" alt=""></img>
          <CardDescription>
            <CardFeature>
              <SmallText>Price:</SmallText>
              <SmallTextDollar>$0.00</SmallTextDollar>
            </CardFeature>
            <TokenInfoCardStats>
              <h3 id="description">Circulating Supply</h3>
              <h3 id="stat">1,000</h3>
              <h3 id="description">Market Cap</h3>
              <h3 id="stat">$1,000</h3>
              <h3 id="description">Total Liquidity</h3>
              <h3 id="stat">$1,000</h3>
              <h3 id="description">Protocol Owned Liquidity</h3>
              <h3 id="stat">$1,000</h3>
            </TokenInfoCardStats>
          </CardDescription>
          <CardButtonContainer>
            <Button>Buy</Button>
          </CardButtonContainer>
        </TokenInfoCard>
        <ContainerFlexColumn>
          <DataDiv>
            <h1>$0.00</h1>
            <h3>Total Treasury Value</h3>
          </DataDiv>
          <DataDiv>
            <h1>$0.00</h1>
            <h3>Total Income</h3>
          </DataDiv>
        </ContainerFlexColumn>
      </ContainerFlex>
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
      <ContainerFlex>
        <PlayerResources>
          <h2>Resources Owned</h2>
          <PlayerResourceRow>
            <img src="./img/iron60px.png" alt=""></img>
            <h3 id="description">Iron</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/cobalt.png" alt=""></img>
            <h3 id="description">Cobalt</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/bismuth.png" alt=""></img>
            <h3 id="description">Bismuth</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/silver.png" alt=""></img>
            <h3 id="description">Silver</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/ruby.png" alt=""></img>
            <h3 id="description">Ruby</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
          <div>&nbsp;</div>
          <img src="./img/line320px.svg" alt=""></img>
          <div>&nbsp;</div>
          <PlayerResourceRow>
            <img src="./img/gem-icon.png" alt=""></img>
            <h3 id="description">CSC Equivalent</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
        </PlayerResources>
        <PlayerResources>
          <h2>Resources Farming</h2>
          <PlayerResourceRow>
            <img src="./img/iron60px.png" alt=""></img>
            <h3 id="description">Iron</h3>
            <h3 id="stat">183,193</h3>
            <ButtonSmall>View</ButtonSmall>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/cobalt.png" alt=""></img>
            <h3 id="description">Cobalt</h3>
            <h3 id="stat">183,193</h3>
            <ButtonSmall>View</ButtonSmall>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/bismuth.png" alt=""></img>
            <h3 id="description">Bismuth</h3>
            <h3 id="stat">183,193</h3>
            <ButtonSmall>View</ButtonSmall>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/silver.png" alt=""></img>
            <h3 id="description">Silver</h3>
            <h3 id="stat">183,193</h3>
            <ButtonSmall>View</ButtonSmall>
          </PlayerResourceRow>
          <PlayerResourceRow>
            <img src="./img/ruby.png" alt=""></img>
            <h3 id="description">Ruby</h3>
            <h3 id="stat">183,193</h3>
            <ButtonSmall>View</ButtonSmall>
          </PlayerResourceRow>
          <div>&nbsp;</div>
          <img src="./img/line320px.svg" alt=""></img>
          <div>&nbsp;</div>
          <PlayerResourceRow>
            <img src="./img/gem-icon.png" alt=""></img>
            <h3 id="description">CSC Equivalent</h3>
            <h3 id="stat">183,193</h3>
          </PlayerResourceRow>
        </PlayerResources>
      </ContainerFlex>
    </StyledBody>
  );
}
