import React from "react";
import './style.css'

function TodoList(props) {
  const callTodos = (e)=>{}
  return (
    <div className="todo-row">
      <p className={`todo-text ${props.todo.state ? 'completed' : ''}`}>
        {props.todo.text}
      </p>
      <div className="icons">
        <input
          className="check-box"
          type="checkbox"
          onChange={() => props.markDone(props.todo.text)}
        />
        <button className="delete-btn" onClick={() => props.deleteTodo(props.todo.text)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
