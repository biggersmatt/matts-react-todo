import React, { useState } from "react";

const CreateToDoForm = (props) => {
  const [todo, setTodo] = useState({
    body: "",
    completed: false,
  })

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

// class CreateToDoForm extends Component {
//   state = {
//     todo: "",
//   };

//   onInputChange = (event) => {
//     this.setState({
//       todo: event.target.value,
//     });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     let todo = this.state.todo;
//     this.props.createTodo(todo);
//     this.setState({
//       todo: "",
//     });
//   };

//   render() {
//     return(
//       <div>
//         <form onSubmit={this.onFormSubmit} id="taskForm">
//           <input
//             onChange={this.onInputChange}
//             type="text" id="newItemDescription"
//             placeholder="What do you need to do?"
//             value={this.state.todo}
//           />
//           <button type="submit" id="addTask" className="btn">Add Todo</button>  
//         </form>
//       </div>
//     );
//   };
// };

// export default CreateToDoForm;