import React, { useState } from "react";
import Todoinput from "./Todoinput";
import TodoList from "./TodoList";
import "./style.css";
const TodoParent = () => {
  const [todos, setTodos] = useState([]);
  const addTodos = (text) => {
    setTodos([...todos, { text: text, state: false }]);
  };
  const deleteTodo = (text) => {
    const newarray = todos.filter((n) => {
      return n.text != text;
    });
    setTodos(newarray);
  };
  const markDone = (text) => {
    const doneMarked = todos.map((n) => {
      if (n.text == text) {
        n.state = !n.state;
        return n;
      } else {
        return n;
      }
    });
    setTodos(doneMarked);
  };
  return (
    <>
      <Todoinput addTodos={addTodos} />
      <div>
        {todos.map((n) => {
          return (
            <TodoList todo={n} markDone={markDone} deleteTodo={deleteTodo} />
          );
        })}
      </div>
    </>
  );
};
export default TodoParent;
