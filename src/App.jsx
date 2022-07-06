// Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home";
import Todos from "./containers/Todos";

const App = () => {
  console.log('App.js');
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route path="/todos" element ={ <Todos /> }/>
      </Routes>
    </div>
  );
};

export default App;