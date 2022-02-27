import React, { useState } from "react";
import styled from "styled-components";

export default function AddTodo({ submitHandler }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input
          placeholder="Add Task..."
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
          setValue("");
        }}
      >
        <SubmitText>Add</SubmitText>
      </SubmitButton>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  border: 1px solid gray;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin-bottom: 20px;
  border-radius: 50px;
`;

const SubmitText = styled.Text`
  color: white;
`;
