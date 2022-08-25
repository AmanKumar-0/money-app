import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="lds">
      <div className="lds-circle">
        <div className="circle">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
