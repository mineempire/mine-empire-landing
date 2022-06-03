import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 700;
  padding: 15px 40px;
  background: ${({ theme }) => theme.button.bg};
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.l};
  font-style: normal;
  font-weight: 600;
  color: ${({ theme }) => theme.text.color};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
