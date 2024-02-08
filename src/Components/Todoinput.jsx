import React, { useState } from "react";
import './style.css'
const Todoinput = (props) => {
  const [text, setText] = useState("");
  const handleValue = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>What's the Plan for Today Aben?</h1>
    
      <input
        type="text"
        placeholder="Add Your plan"
        value={text}
        onChange={handleValue}
        className="todo-input"
      />
      
      <button className="todo-btn"
        onClick={() => {
          props.addTodos(text);
          setText("");
        }}
      >
        Add
      </button>
      
    </div>
  );
};

export default Todoinput;
