import React from "react";
import styled from "styled-components";
import popperEmoji from "../../assets/images/popper.png";

const CelebrationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #6b7280;
    margin: 40px 0 20px 0;
  }

  img {
    height: 120px;
    margin-top: 20px;
    width: 120px;
  }
`;

interface Props {
  type: string;
}

const ZeroBills = (props: Props) => {
  const { type } = props;

  return (
    <CelebrationContainer>
      <img src={popperEmoji} alt="Party popper emoji icon"></img>
      <h3>You have no more {type.toLowerCase()} bills!</h3>
    </CelebrationContainer>
  );
};

export default ZeroBills;
