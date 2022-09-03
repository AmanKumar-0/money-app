import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import "./Blog.css";
const Blog = () => {
  const _id = useParams().id;
  const [data, setData] = useState([]);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const sendRequest = async () => {
    setLoading(true);
    const searchRes = await fetch(`/api/blog/${_id}`, {
      method: "GET",
    });
    const searchData = await searchRes.json();
    setLoading(false);
    setData(searchData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: new URLSearchParams({
        desc: review,
        blogId: _id,
      }),
    };
    fetch(`/api/review/newReview`, options)
      .then((response) => response.json())
      .then(() => setReview(""))
      .then(() => sendRequest())
      .catch((err) => console.error(err));
  };

  const handleDelete = (reviewId) => {
    fetch(`/api/review/deleteReview/${reviewId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => sendRequest())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sendRequest();
  }, [_id]);
  return (
    <div className="blog">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="blog__data">
            <img
              className="blog-image"
              src={data.imageUrl}
              alt={data.imageUrl}
            />
            <h1>{data.title}</h1>
            <p>{data.c_date}</p>
            <h4>{data.body}</h4>
          </div>
          <div className="reviews">
            <h3>Reviews</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="reviews-input"
                name="review"
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></input>
              <button className="Submit-review">Submit</button>
            </form>
            {data?.reviews?.map((data) => {
              return (
                <div className="review-desc" key={data._id}>
                  <button
                    className="review-dlt-btn"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </button>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
