import React from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const todos = [
    {
      content: "課題をする",
    },
    {
      content: "洗濯をする",
    },
    {
      content: "電話をする",
    },
  ];
  return (
    <>
      <h1>Todo App 2</h1>
      <Form />
      <List todos={todos} />
    </>
  );
};

export default App
