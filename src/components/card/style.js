import styled from "styled-components";

export const Container = styled.div`
  opacity: 0;
  transform: all 0.3s ease;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.smaller};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.smaller};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 100%;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    ${Container} {
      opacity: 1;
    }
  }
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
`;

export const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.semiTransparent};
  z-index: 2;
`;

export const PopUpContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.medium};
  border-radius: ${({ theme }) => theme.sizes.smaller};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

export const ButtonCancelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Form = styled.form`
  position: relative;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.sizes.smaller};
  margin-top: ${({ theme }) => theme.sizes.smaller};
  div {
    width: ${({ theme }) => theme.fixedSizes.button};
  }
`;

export const DeleteFooter = styled(Footer)`
  justify-content: flex-end;
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

export const ButtonCancel = styled(Button)`
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const ButtonDanger = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger};
  span {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.danger};
    opacity: 0.9;
  }
`;

export const DeleteContent = styled.span`
  margin: ${({ theme }) => theme.sizes.small} 0;
`;

export const H4 = styled.h4`
  text-align: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  padding: ${({ theme }) => theme.sizes.smaller};
  width: 90%;
  font-weight: bold;
  border: 2px solid transparent;
  outline: none;
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: ${({ theme }) => theme.sizes.xsmall};
  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;
export const LabelInput = styled.label`
  padding: ${({ theme }) => theme.sizes.smaller};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.lgsmall};
  margin-left: ${({ theme }) => theme.sizes.smaller};
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.sizes.small} 0;
  input,
  textarea {
    margin: 0 ${({ theme }) => theme.sizes.medium};
  }
`;

export const ContainerLabelInput = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.smaller};
`;

export const Textarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  outline: none;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.blue};
  outline: none;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const TagInput = styled.input`
  outline: none;
  border: none;
  padding: ${({ theme }) => theme.sizes.smaller};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  width: ${({ theme }) => theme.fixedSizes.tag};
  margin: 0 !important;
  text-align: center;
`;

export const LabelsContentContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.small};
  margin: 0 ${({ theme }) => theme.sizes.medium};
  flex-wrap: wrap;
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.xsmall};
`;

export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.mdsmall};
  padding: ${({ theme }) => theme.sizes.xsmall};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
`;

export const LabelItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.xsmall};
  border-radius: ${({ theme }) => theme.sizes.xsmall};
  opacity: 0.8;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.mdsmall};
`;

export const TextWrapper = styled.div`
  margin: 0 ${({ theme }) => theme.sizes.medium};
`;
