import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import "./AllBlogs.css";

const AllBlogs = () => {
  const URL = "/api/blog";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const sendRequest = async () => {
    setLoading(true);
    const searchRes = await fetch(URL, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    const searchData = await searchRes.json();
    setRefresh(false);
    setData(searchData);
    setLoading(false);
  };

  const hDelete = async (id) => {
    setRefresh(true);
    fetch(`/api/blog/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setRefresh(false);
  };

  useEffect(() => {
    sendRequest();
  }, [refresh]);

  return (
    <div className="all-blogs">
      {loading ? (
        <Loading />
      ) : (
        <div className="blogs">
          {data.map((d) => {
            return (
              <Card
                key={d._id}
                title={d.title}
                body={d.body}
                id={d._id}
                cDate={d.createDate}
                uDate={d.updatedDate}
                reviews={d.reviews}
                images={d.imageUrl}
                hDelete={(id) => hDelete(id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
