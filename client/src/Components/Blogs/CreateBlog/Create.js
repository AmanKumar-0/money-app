import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../Nav/Nav";
import "./Create.css";
const Create = () => {
  const _id = useParams().id;
  const navigate = useNavigate();
  const [data, setData] = useState({ title: "", body: "", imageUrl: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendRequest = async (_id) => {
    const searchRes = await fetch(`/api/blog/${_id}`, {
      method: "GET",
    });
    const searchData = await searchRes.json();
    setData(searchData);
  };

  const fetchData = async (z = false) => {
    if (data.title === "" || data.body === "")
      return alert("Please Enter both fields Title and Body");
    if (z) {
      const options = {
        method: "PUT",
        body: new URLSearchParams({
          title: data.title,
          body: data.body,
          imageUrl: data.imageUrl,
        }),
      };
      fetch(`/api/blog/update/${_id}`, options)
        .then((response) => response.json())
        .catch((err) => console.error(err));
    } else {
      const options = {
        method: "POST",
        body: new URLSearchParams({
          title: data?.title,
          body: data?.body,
          imageUrl: data?.imageUrl,
        }),
      };
      fetch("/api/blog/add", options)
        .then((response) => response.json())
        .catch((err) => console.error(err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (_id) {
      return fetchData(true).then(() => navigate("/allBlogs"));
    } else {
      fetchData().then(() => navigate("/allBlogs"));
    }
  };

  useEffect(() => {
    {
      _id && sendRequest(_id);
    }
  }, [_id]);

  return (
    <div className="creating">
      <h1>{_id ? "Update your Blog" : "Create your Blog"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="create-input"
          type="text"
          name="title"
          placeholder="Title of your Blog"
          value={data.title}
          onChange={handleChange}
        ></input>
        <input
          className="create-input"
          type="text"
          name="body"
          placeholder="Description of your Blog"
          value={data.body}
          onChange={handleChange}
        ></input>
        <input
          className="create-input"
          type="text"
          name="imageUrl"
          placeholder="Image Url"
          value={data.imageUrl}
          onChange={handleChange}
        ></input>
        <button className="create-button" type="submit">
          {_id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Create;
