import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./component/Form";
import Items from "./component/Items";
const App = () => {
  const local = JSON.parse(localStorage.getItem("items")) ?? [];
  const [items, setItems] = useState(local);
  console.log(items);
  const addItem = (name) => {
    const newItem = { id:nanoid(), name: name, completed: false };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
