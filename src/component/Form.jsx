import { useState } from "react";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      console.error("item must not be null");
      return;
    }
    addItem(item);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
