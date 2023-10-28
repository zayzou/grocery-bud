import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./component/Form";
import Items from "./component/Items";
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const newItem = { id: nanoid(), name: name, completed: false };
    setItems([...items, newItem]);
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
