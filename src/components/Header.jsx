import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log('Header.js')
  return(
    <header>
      <h1>To-Do</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/todos"}>To-Dos</Link>
      </nav>
    </header>
  )
}

export default Header;