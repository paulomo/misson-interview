import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components";

// Components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Empty from "./components/Empty";
import Header from "./components/Header";

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="white" />
      </View>

      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TodoList item={item} deleteItem={deleteItem} />
          )}
        />
        <View>
          <AddTodo submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: white;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
