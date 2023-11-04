import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("🦄 Name cannot be empty!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    addItem(item);
    setItem("");
    toast.success("🦄 Item added successfully", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <ToastContainer />
      <h4 className="logo">
        Grocery
        <span>Bud</span>
      </h4>
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
