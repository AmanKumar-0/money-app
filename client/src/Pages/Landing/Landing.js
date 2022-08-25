import React from "react";
import Nav from "../../Components/Nav/Nav";
import front from "../../assets/front.png";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import AllBlogs from "../All Blogs/AllBlogs";
import Create from "../../Components/Blogs/CreateBlog/Create";
import Loading from "../../Components/Loading/Loading";
const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/allBlogs");
  };
  return (
    <>
      <div className="landing">
        <div className="left">
          <h1>Welcome to Blogs !</h1>
          <button className="landing-button" onClick={handleClick}>
            View All Blogs
          </button>{" "}
        </div>
        <img src={front} alt="hi" />
      </div>
    </>
  );
};

export default Landing;
