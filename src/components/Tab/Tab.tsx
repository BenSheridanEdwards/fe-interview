import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TabContainer = styled.li`
  list-style-type: none;
  padding: 0 4px;

  &:first-child {
    padding-left: 0;
  }
`;

interface TabProps {
  isActive: boolean;
}

const TabButton = styled.button<TabProps>`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  border-color: ${props => (props.isActive ? "#1d4ed8" : "transparent")};
  cursor: pointer;
  font-size: 18px;
  padding: 4px 8px;
  z-index: 20;

  &:focus {
    border-radius: 4px;
    box-shadow: 0 0 0 3px #6dd7dd;
    outline: none;
    z-index: 40;
  }
`;

interface Props {
  label: string;
  activeTab: string;
  setActiveTab: Function;
}

const Tab = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(
    props.activeTab === props.label
  );

  useEffect(() => {
    setIsActive(props.activeTab === props.label);
  }, [props.activeTab, props.label]);

  const handleTabChange = () => {
    props.setActiveTab(props.label);
  };

  return (
    <TabContainer>
      <TabButton isActive={isActive} onClick={handleTabChange}>
        {props.label}
      </TabButton>
    </TabContainer>
  );
};

export default Tab;
