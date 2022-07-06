import React, { useState } from "react";

const CreateToDoForm = (props) => {
  const [todo, setTodo] = useState("")

  const handleInputChange = (event) => {
    console.log(event.target.value)
    console.log(todo)
    setTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newTodo = todo;
    props.handleCreateTodo(newTodo);
    this.setState({
      todo: "",
    });
  };

  return(
    <div>
      <form onSubmit={handleFormSubmit} id="taskForm">
        <input
          onChange={handleInputChange}
          type="text" id="newItemDescription"
          placeholder="What do you need to do?"
          value={todo}
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