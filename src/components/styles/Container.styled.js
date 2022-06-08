import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ bg }) => bg};
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  width: 1440px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  text-align: center;
  background-color: ${({ bg }) => bg};
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: baseline;
  width: auto;
  text-align: left;
  padding: 60px;
`;

export const PageTitleLeft = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: baseline;
  width: auto;
  text-align: left;
  padding-left: 100px;
`;

export const BulletPoint = styled.div`
  display: flex;
`;

export const DataDiv = styled.div`
  display: flex;
  border-radius: 15px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(153, 41, 198, 0.58) 0%,
    rgb(70.13, 60.78, 60.78) 95.57%
  );
  width: ${(props) => (props.width ? props.width : "300px")};
  height: ${(props) => (props.height ? props.height : "160px")};
  flex-direction: column;
  justify-content: center;

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

export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
