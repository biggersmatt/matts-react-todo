// Dependencies
import React, { useState } from "react";

const CreateToDoForm = (props) => {
/*********************************************** State **********************************************/
  const [todo, setTodo] = useState({
    body: "",
    completed: false,
  })
/*********************************************** Functions **********************************************/
  const handleInputChange = (event) => {
    setTodo({
      body: event.target.value,
      completed: false,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleCreateTodo(todo);
    setTodo({
      body: "",
      completed: false,
    });
  };
/*********************************************** Return **********************************************/
  return(
    <div>
      <form onSubmit={handleFormSubmit} id="taskForm">
        <input
          onChange={handleInputChange}
          type="text" id="newItemDescription"
          placeholder="What do you need to do?"
          value={todo.body}
        />
        <button type="submit" id="addTask" className="btn">Add Todo</button>  
      </form>
    </div>
  );
};

export default CreateToDoForm;