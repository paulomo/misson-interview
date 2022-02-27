import React from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function TodoList({ item, deleteItem }) {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Entypo name="circle" size={20} color="white" />
        </CirlceContainer>
        <View>
          <TextItem>{item.value}</TextItem>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: black;
  height: auto;
  width: 350px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: white;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 8px;
  margin-right: 20px;
  padding-left: 10px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 40px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;
