// Dependencies
import React, { useState, useEffect } from "react";
import Todos from "../components/Todos";
import CreateTodoForm from "../components/CreateTodoForm";

const TodosContainer = () => {
/*********************************************** State **********************************************/
  const [state, setState] = useState({
    todos: [],
    update: true,
  })

/*********************************************** Hook **********************************************/
  useEffect(() => {
    if(state.update) {
      handleFetchAllTodos();
    }
  }, [state.update])

/*********************************************** Fetch All **********************************************/
  const handleFetchAllTodos = () => {
    fetch(`https://super-crud.herokuapp.com/todos`)
    .then(response => response.json())
    .then(jsonData => setState({
      todos: jsonData.todos,
      update: false,
    }))
    .catch(err => console.log(err));
  }

/*********************************************** Create **********************************************/
  const handleCreateTodo = (todo) => {
    fetch("https://super-crud.herokuapp.com/todos", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(todo),
    })
    .then(() => {
      setState({
        todos: state.todos,
        update: true,
      });
    })
    .catch(err => console.log(err));
  }

/*********************************************** Update **********************************************/
  const handleUpdateTodo = (todo) => {
    fetch(`https://super-crud.herokuapp.com/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    .then(() => setState({
      todos: state.todos,
      update: true,
    }))
    .catch(err => console.log(err));
  }

/*********************************************** Delete **********************************************/
  const handledDeleteTodo = (todo) => {
    fetch(`https://super-crud.herokuapp.com/todos/${todo._id}`, {
      method: "DELETE",
    })
    .then(() => {
      let filteredTodos = state.todos.filter((todo) => {
        return todo._id !== state.todos._id
      });
      setState({
        todos: filteredTodos,
        update: true,
      });
    })
    .catch(err => console.log(err));
  }

/*********************************************** Return **********************************************/
  return (
    <div className = "todosContainer">
      <CreateTodoForm
        handleCreateTodo={handleCreateTodo}
      />
      <Todos 
        todos={state.todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handledDeleteTodo}
      />
    </div>  
  );
};

export default TodosContainer;