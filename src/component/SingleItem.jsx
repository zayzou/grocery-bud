import React from "react";

const SingleItem = ({ name, completed }) => {
  return (
    <div className="single-item">
      <input type="checkbox" checked={completed} />
      <p style={{ textTransform: "capitalize" }}>{name}</p>
      <button className="btn remove-btn">Delete</button>
    </div>
  );
};

export default SingleItem;
