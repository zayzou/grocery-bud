import React, { useState } from "react";

const SingleItem = ({ name, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);
  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="single-item">
      <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
      <p style={{ textDecoration: isChecked ? "line-through" : "" }}>{name}</p>
      <button className="btn remove-btn">Delete</button>
    </div>
  );
};

export default SingleItem;
