// Dependencies
import React, { useState } from "react";

const TodoForm = (props) => {
/*********************************************** State **********************************************/
  const [todo, setTodo] = useState("");

/*********************************************** Functions **********************************************/
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTodo = props.todo.todo;
    updatedTodo.body = todo;
    props.handleUpdateTodo(updatedTodo)
    props.toggleBodyForm();
  };

/*********************************************** Return **********************************************/
  return(
    <div style={props.style} className="todoForm">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus={props.autoFocus}
          onChange={handleChange}
          placeholder="Write a todo here..."
          type="text"
          value={todo}
        />
        <button type="submit">Save</button>  
      </form>
    </div>
  );
};

export default TodoForm;