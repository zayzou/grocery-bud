import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./component/Form";
import Items from "./component/Items";
const App = () => {
  const local = JSON.parse(localStorage.getItem("items")) ?? [];
  const [items, setItems] = useState(local);

  const addItem = (name) => {
    const newItem = { id: nanoid(), name: name, completed: false };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItems = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems)

  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItems={editItems}
      />
    </section>
  );
};

export default App;
