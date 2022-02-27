import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>Task List</HeaderText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: black;
  font-size: 30px;
`;
