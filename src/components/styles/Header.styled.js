import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const LandingNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export const Logo = styled.img``;

export const NavLink = styled.div`
  cursor: pointer;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.l};
  color: ${({ theme }) => theme.text.color};
  letter-spacing: 0;
  font-weight: 600;
  height: 16px;
  padding: 30px;

  &:hover {
    color: ${({ theme }) => theme.text.orange};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
`;
