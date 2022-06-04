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
