import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ title, body, id, cDate, uDate, hDelete, images }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    hDelete(id);
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="card-container">
      <div className="card-buttons">
        <button
          className="card-edit-button"
          onClick={() => navigate(`/createBlog/${id}`)}
        >
          Edit
        </button>
        <button className="card-delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="card-data" onClick={() => navigate(`/${id}`)}>
        <img className="card-img" src={images} />
        <div className="card-title">{truncate(title, 20)}</div>
        <div className="card-body">{truncate(body, 100)}</div>
      </div>
    </div>
  );
};

export default Card;
