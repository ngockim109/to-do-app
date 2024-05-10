import styled from "styled-components";

export const Wrapper = styled.li`
  height: 100%;
`;

export const Header = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.smaller};
`;

export const Footer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.smaller};
  position: sticky;
  bottom: 0;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.neutral};
  }
`;

export const CircleButton = styled(Button)`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.neutral};
  cursor: default;
`;

export const Container = styled.div`
  max-height: 100%;
  width: 272px;
  max-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.sizes.small};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CardContainer = styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.smaller};
  padding: ${({ theme }) => theme.sizes.smaller};
  overflow-y: auto;
  list-style: none;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: 0.9;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    opacity: 1;
  }
  i,
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xsmall};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.smaller};
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  outline: none;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
`;
