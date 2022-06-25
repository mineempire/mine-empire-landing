import styled from "styled-components";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.div`
  display: flex;
  top: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  justify-content: center;
  overflow: hidden;

  img {
    vertical-align: middle;
  }

  @media screen and (max-width: 960px) {
    img {
      width: 300%;
    }
  }
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  margin-top: 175px;
`;

export const HeroButton = styled(Button)`
  color: black;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0px;

  img {
    width: 50px;
  }

  &:before {
    background: rgba(255, 255, 255, 0.5);
    height: 300%;
    width: 150%;
  }

  &:hover:before {
    height: 0%;
  }

  &:hover {
    color: white;
  }
`;
