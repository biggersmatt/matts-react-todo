import React from "react";
import Todo from "./Todo"

const Todos = (props) => {
    return (
      <div>
        {props.todos.map((todo) => {
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