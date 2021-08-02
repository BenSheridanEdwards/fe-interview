import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  isOpen: boolean;
}

const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: #1d4ed8;
  border: 3px solid #1d4ed8;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 62px;
  justify-content: space-between;
  margin-top: 20px;
  padding: 8px 12px;
  transition: ${props => (props.isOpen ? "ease-out 0.25s" : "ease-in 0.25s")};
  width: 100%;
  z-index: 100;

  &:hover,
  &:focus {
    background-color: #2563eb;
    border-color: #2563eb;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 3px #6dd7dd;
    outline: none;
    transition: ease-in 0.0005s;
  }

  &:active {
    background-color: #1e40af;
    border-color: #1e40af;
  }

  &&& {
    border-bottom-left-radius: ${props => (props.isOpen ? "0" : "8px")};
    border-bottom-right-radius: ${props => (props.isOpen ? "0" : "8px")};
  }
`;

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const ButtonImageContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;

  img {
    height: 20px;
    width: 20px;
  }
`;

const ButtonLabelContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const ButtonText = styled.span`
  color: #f9fafb;
  font-weight: bold;
  text-align: left;
`;

const ButtonSubText = styled.span`
  color: #f9fafb;
  font-size: 10px;
  font-weight: bold;
`;

const ButtonIcon = styled.span<ButtonProps>`
  height: 20px;
  margin-right: 12px;
  transform: ${props => (props.isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: ${props => (props.isOpen ? "ease-out 0.25s" : "ease-in 0.25s")};
  width: 20px;
`;

const rotateContent = keyframes`
  0% {
    transform: rotateX(100deg);
  }
  50% {
    transform: rotateX(50deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const DropdownContent = styled.div`
  align-items: center;
  animation: ${rotateContent} 0.25s ease-in-out forwards;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -10px;
  padding: 30px 20px 20px;
  transform-origin: top center;
  width: 100%;
  z-index: 10;

  button:first-child {
    margin-top: 0;
  }
`;

interface Props {
  children: ReactElement;
  buttonText: string;
  subText: string;
  iconUrl: string;
}

const DropdownButton = (props: Props) => {
  const { buttonText, subText, iconUrl } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <ButtonWrapper>
          <ButtonImageContainer>
            <img src={iconUrl} alt={`${buttonText} icon`}></img>
          </ButtonImageContainer>
          <ButtonLabelContainer>
            <ButtonText>{buttonText}</ButtonText>
            <ButtonSubText>{subText}</ButtonSubText>
          </ButtonLabelContainer>
        </ButtonWrapper>
        <ButtonIcon isOpen={isOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#d1d5db"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </ButtonIcon>
      </Button>
      {isOpen && <DropdownContent>{props.children}</DropdownContent>}
    </>
  );
};

export default DropdownButton;
