import styled from "styled-components";

export const StyledBody = styled.body`
  background-color: ${({ theme }) => theme.colors.body};
`;

export const Logo = styled.img`
  width: 35%;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.title};
  color: ${({ theme }) => theme.text.color};
  font-weight: 700;
`;

export const Title2 = styled.h1`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.title2};
  color: ${({ theme }) => theme.text.color};
  font-weight: 700;
`;

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.xxxl};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 700;
  margin: 10px 15px 10px 15px;
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.xxxl};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.xl};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 400;
`;

export const SmallText = styled.p`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.m};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 400;
  margin: 5px;
`;

export const SmallTextDollar = styled.p`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.m};
  color: ${({ theme }) => theme.text.green};
  font-style: normal;
  font-weight: 600;
  margin: 5px;
`;

export const SocialIcon = styled.img`
  cursor: pointer;
  padding: 10px;
`;
