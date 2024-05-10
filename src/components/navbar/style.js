import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;
