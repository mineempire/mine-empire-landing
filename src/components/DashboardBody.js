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
} from "./styles/Game.styled";
import { Button } from "./styles/Button.styled";

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
              <img src="./img/coinmarketcap-icon.png" />
              <img src="./img/coingecko-icon.png" />
              <CardFeature>
                <img src="./img/plus.svg" />
                <img src="./img/metamask-icon.png" />
              </CardFeature>
            </TokenInfoTitleContainer>
          </TokenInfoTitleContainer>
          <img src="./img/line360px.svg"></img>
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
            <img src="./img/gem-icon.png" />
          </TokenInfoCardImgContainer>
          <TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <h1>GEM</h1>
              <h3>Mine Empire</h3>
            </TokenInfoTitleContainer>
            <TokenInfoTitleContainer>
              <img src="./img/coinmarketcap-icon.png" />
              <img src="./img/coingecko-icon.png" />
              <CardFeature>
                <img src="./img/plus.svg" />
                <img src="./img/metamask-icon.png" />
              </CardFeature>
            </TokenInfoTitleContainer>
          </TokenInfoTitleContainer>
          <img src="./img/line360px.svg"></img>
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
    </StyledBody>
  );
}
