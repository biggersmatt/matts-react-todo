// Dependencies
import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {
/*********************************************** State **********************************************/
  const [state, setState] = useState({
    formStyle: {
      display: 'none'
    }
  })

/*********************************************** Functions **********************************************/
  const handleToggleBodyForm = () => {
    state.formStyle.display === "block"
    ? setState({ formStyle: {display: "none"}})
    : setState({ formStyle: {display: "block"}});
  }

/*********************************************** Return **********************************************/
  return (
    <li data-todos-index={props.todo._id}>
      <div>
        <span className="todo-item">{props.todo.body}</span>
        <span className="edit" onClick={handleToggleBodyForm}>Edit</span>
        <span className="remove" onClick={() => props.handleDeleteTodo(props.todo)}>Remove</span>
      </div> 
      <TodoForm 
        todo={props}
        style={state.formStyle}
        autoFocus={true}
        buttonName="Update Todo!"
        handleUpdateTodo={props.handleUpdateTodo}
        toggleBodyForm={handleToggleBodyForm}
      />   
    </li>
  )
}

export default Todo;