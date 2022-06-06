import styled from "styled-components";

export const Planet = styled.div`
  display: block;
  background-color: #312525;
  border-radius: 15px;
  width: 320px;

  img {
    width: 100px;
  }
`;

export const TokenInfoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #312525;
  border-radius: 15px;
  width: 360px;
  margin: 0 50px 0 0;
`;

export const PlanetCardBig = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #312525;
  border-radius: 15px;
  width: 480px;
`;

export const PlanetCardBigImgContainer = styled.div`
  display: block;
  img {
    width: 200px;
    padding: 15px;
  }
`;

export const TokenInfoCardImgContainer = styled.div`
  display: block;
  img {
    width: 80px;
    padding: 10px;
  }
`;

export const TokenInfoTitleContainer = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;

  img {
    width: 30px;
    margin: 0 5px 0 5px;
  }

  h1 {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxxl};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 700;
    margin: 3px 15px 3px 5px;
  }

  h3 {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxl};
    color: ${({ theme }) => theme.text.labelColor};
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }
`;

export const CardFeature = styled.div`
  display: flex;
  align-items: center;
  background-color: #463d3d;
  border-radius: 15px;
  padding: 3px 10px 3px 10px;

  img {
    margin: 0;
  }
`;

export const TokenInfoCardStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  h3#description {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.l};
    color: ${({ theme }) => theme.text.labelColor};
    font-style: normal;
    font-weight: 600;
    width: 240px;
    margin: 0 0 5px 20px;
    text-align: left;
  }
  h3#stat {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.l};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 600;
    width: 80px;
    margin: 0 0 5px 0;
    text-align: right;
  }
`;

export const PlanetCardBigTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 250px;

  h3 {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxl};
    color: ${({ theme }) => theme.text.labelColor};
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }
`;

export const PlanetCardBigProductionInfo = styled.div`
  display: flex;
  margin: 25px auto 25px auto;
  align-items: center;
  background-color: #463d3d;
  border-radius: 15px;

  img {
    margin: 10px;
    width: 30px;
  }

  h3#production {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxl};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 400;
    margin: 10px;
  }

  h3#amount {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxl};
    color: ${({ theme }) => theme.text.orange};
    font-style: normal;
    font-weight: 600;
    margin: 0;
    margin: 10px;
  }
`;

export const CardStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: max;
  width: 480px;

  h3#description {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxxl};
    color: ${({ theme }) => theme.text.labelColor};
    font-style: normal;
    font-weight: 600;
    width: 215px;
    margin: 0 0 5px 25px;
  }
  h3#stat {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xxxl};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 600;
    width: 215px;
    margin: 0 25px 5px 0;
    text-align: right;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  margin: 15px 0 0 0;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  margin: 30px auto 30px auto;
`;

export const PlayerResources = styled.div`
  background-color: #312525;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin 0 25px 0 25px;

  h2 {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xl};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 600;
    text-align: left;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

export const PlayerResourceRow = styled.div`
  display: flex;
  align-items: center;

  h3#description {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xl};
    color: ${({ theme }) => theme.text.labelColor};
    font-style: normal;
    font-weight: 400;
    width: 200px;
    text-align: left;
    margin: 0 0 0 15px;
  }
  h3#stat {
    font-family: ${({ theme }) => theme.text.fontFamily};
    font-size: ${({ theme }) => theme.text.size.xl};
    color: ${({ theme }) => theme.text.color};
    font-style: normal;
    font-weight: 600;
    margin: 0;
    text-align: right;
    text-align: right;
  }

  img {
    width: 35px;
  }
`;
