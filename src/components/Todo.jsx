import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [state, setState] = useState({
    formStyle: {
      display: 'none'
    }
  })

  const handleToggleBodyForm = () => {
    state.formStyle.display === "block"
    ? setState({ formStyle: {display: "none"}})
    : setState({ formStyle: {display: "block"}});
  }

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
        updateTodo={props.updateTodo}
        toggleBodyForm={handleToggleBodyForm}
      />   
    </li>
  )
}

export default Todo;

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formStyle: {
//         display: "none"
//       },
//     };
//   };

//   toggleBodyForm = () => {
//     this.state.formStyle.display === "block"
//     ? this.setState({ formStyle: {display: "none"}})
//     : this.setState({ formStyle: {display: "block"}});
//   }

//   deleteClickedTodo = () => {
//     this.props.deleteTodo(this.props.todo);
//   }

//   render() {
//     return (
//       <li data-todos-index={this.props.todo._id}>
//         <div>
//           <span className="todo-item">
//             {this.props.todo.body}
//           </span>
//           <span className="edit"
//           onClick={this.toggleBodyForm}>
//             Edit
//           </span>
//           <span
//             className="remove"
//             onClick={this.deleteClickedTodo}>
//               Remove
//           </span>
//         </div> 
//         <TodoForm 
//           todo={this.state.props}
//           style={this.state.formStyle}
//           autoFocus={true}
//           buttonName="Update Todo!"
//           updateTodo={this.props.updateTodo}
//           toggleBodyForm={this.toggleBodyForm}
//         />   
//       </li>
//     )
//   }
// }

// export default Todo;