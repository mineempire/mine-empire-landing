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
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.xxxl};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 700;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.l};
  color: ${({ theme }) => theme.text.color};
  font-style: normal;
  font-weight: 400;
`;

export const SocialIcon = styled.img`
  cursor: pointer;
  padding: 10px;
`;
