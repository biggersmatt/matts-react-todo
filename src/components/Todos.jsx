// Dependencies
import Todo from "./Todo"

const Todos = (props) => {
/*********************************************** Functions/Variables **********************************************/
  const reversedTodos = [];

  for(let i = props.todos.length - 1; i >= 0; i--) {
    reversedTodos.push(props.todos[i]);
  }
/*********************************************** Return **********************************************/
  return (
    <div>
      {reversedTodos.map((todo) => {
        return  <Todo
                  key={todo._id}
                  todo={todo} 
                  handleCreateTodo={props.handleCreateTodo}
                  handleUpdateTodo={props.handleUpdateTodo}
                  handleDeleteTodo={props.handleDeleteTodo}
                />
      })}
    </div>
  );
};

export default Todos;