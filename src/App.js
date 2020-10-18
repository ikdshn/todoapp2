import React, { useState } from "react";

import Title from "./Title";
import Form from "./Form";
import List from "./List";

const App = () => {
  // stateを使用する
  const [username, setUsername] = useState("Misagon");
  const changeName = () => {
    setUsername("Gon");
  };
  const [todos, setTodos] = useState([
    { content: "掃除をする" },
    { content: "洗濯をする" },
    { content: "料理をする" },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { content: text }]);
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
      <List todos={todos} />
      <button onClick={changeName}>名前変更ボタン</button>
    </React.Fragment>
  );
};

export default App;
