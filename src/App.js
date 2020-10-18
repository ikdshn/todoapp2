import React, { useState } from "react";

import Title from "./Title";
import Form from "./Form";
import List from "./List";

import shortid from "shortid";

const App = () => {
  // stateを使用する
  const [username, setUsername] = useState("Misagon");
  const changeName = () => {
    setUsername("Gon");
  };
  const [todos, setTodos] = useState([
    { content: "掃除をする", id: shortid.generate() },
    { content: "洗濯をする", id: shortid.generate() },
    { content: "料理をする", id: shortid.generate() },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { content: text, id: shortid.generate() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // stateを使用しない例
  // let username = "Misagon";
  // const changeName = () => {
  //   console.log(username);
  //   username = "Gon";
  // };

  return (
    <React.Fragment>
      <Title name={username} />
      <Form addTodo={addTodo} />
      <List deleteTodo={deleteTodo} todos={todos} />
      <button onClick={changeName}>名前変更ボタン</button>
    </React.Fragment>
  );
};

export default App;
