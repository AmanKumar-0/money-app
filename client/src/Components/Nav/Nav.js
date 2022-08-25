import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const handleClick = (z) => {
    if (z) navigate("./");
    else navigate("./createBlog");
  };
  return (
    <div className="navbar">
      <h2 onClick={() => handleClick(true)}>Blogs</h2>
      <button className="navbar-button" onClick={() => handleClick(false)}>
        Create Blog
      </button>
    </div>
  );
};

export default Nav;
