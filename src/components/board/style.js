import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Container = styled.ol`
  display: flex;
  height: 100%;
  gap: ${({ theme }) => theme.sizes.smaller};
  padding: ${({ theme }) => theme.sizes.small};
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
  user-select: none;
  list-style: none;
`;

export const ButtonContainer = styled.div`
  width: 272px;
  display: flex;
  gap: ${({ theme }) => theme.sizes.xsmall};
  margin-top: ${({ theme }) => theme.sizes.smaller};
`;

export const BoxContainer = styled.div`
  width: 272px;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.glass};
  padding: ${({ theme }) => theme.sizes.small};
  border-radius: ${({ theme }) => theme.sizes.small};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.neutral};
  }
  i,
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: 0.9;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.smaller};
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

export const ButtonCancel = styled(Button)`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.smaller};
  i {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.smaller};
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 272px;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  outline: none;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
`;
