import React, { useState, useEffect } from "react";
import Todos from "../components/Todos";
import CreateTodoForm from "../components/CreateTodoForm";

const TodosContainer = () => {

  const [state, setState] = useState({
    todos: [],
    update: true,
  })

  useEffect(() => {
    if(state.update) {
      handleFetchAllTodos();
    }
  }, [state.update])

  const handleFetchAllTodos = () => {
    fetch(`https://super-crud.herokuapp.com/todos`)
    .then(response => response.json())
    .then(jsonData => setState({
      todos: jsonData.todos,
      update: false,
    }))
    .catch(err => console.log(err));
  }

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

  return (
    <div className = "todosContainer">
      <CreateTodoForm
        handleCreateTodo={handleCreateTodo}
      />
      <Todos 
        todos={state.todos}
        handleDeleteTodo={handledDeleteTodo}
      />
    </div>  
  );
};

export default TodosContainer;

// class TodosContainer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//     };
//   };

//   componentDidMount() {
//     this.fetchData();
//   };

//   fetchData = () => {
//     TodoModel.all()
//     .then((res) => {
//       const data = res.data.todos;
//       this.setState ({
//         todos: data,
//       });
//     });
//   };

//   createTodo = (todo) => {
//     let newTodo = {
//         body: todo,
//         completed: false,
//     };
//     TodoModel.create(newTodo)
//     .then((res) => {
//         let todos = this.state.todos;
//         todos.push(res.data);
//         this.setState({ todos: todos });
//     });
//   };

//   deleteTodo = (todo) => {
//     TodoModel.delete(todo).then((res) => {
//       let todos = this.state.todos.filter((todo) => {
//         return todo._id !== res.data._id
//       });
//       this.setState({todos});
//     })
//   }

//   updateTodo = todo => {
//     const isUpdatedtodo = t => {
//       return t._id === todo._id;
//     };
//     TodoModel.udpate(todo)
//     .then((res) => {
//       let todos = this.state.todos;
//       todos.find(isUpdatedtodo).body = todo.body;
//       this.setState({ todos: todos })
//     });
//   };

//   render() {
//     return (
//       <div className = "todosContainer">
//         <CreateToDoForm
//           createToDo={this.createToDo}
//         />
//         <Todos
//           todos={this.state.todos}
//           updateTodo={this.updateTodo}
//           deleteTodo={this.deleteTodo}
//         />
//       </div>  
//     );
//   };
// };

// export default TodosContainer;