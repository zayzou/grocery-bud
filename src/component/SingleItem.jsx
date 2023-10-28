import React, { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
      <p style={{ textDecoration: isChecked ? "line-through" : "" }}>{name}</p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
