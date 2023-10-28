import React, { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem, handleCompleted }) => {
  // const [isChecked, setIsChecked] = useState(completed);
  // const handleIsChecked = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleted(id)}
      />

      <p className={completed ? "done" : ""}>{name}</p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
