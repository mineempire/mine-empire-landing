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
