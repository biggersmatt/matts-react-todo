import React from "react";
import Todo from "./Todo"

const Todos = (props) => {

  const reversedTodos = [];

  for(let i = props.todos.length - 1; i >= 0; i--) {
    reversedTodos.push(props.todos[i]);
  }

  return (
    <div>
      {reversedTodos.map((todo) => {
        return  <Todo
                  key={todo._id}
                  todo={todo} 
                  handleDeleteTodo={props.handleDeleteTodo}
                  handleCreateTodo={props.handleCreateTodo}
                  updateTodo={props.updateTodo}
                />
      })}
    </div>
  );
};

export default Todos;