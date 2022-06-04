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
  width: 320px;
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

export const CardButtonContainer = styled.div`
  display: flex;
  margin: 50px auto 50px auto;
`;
