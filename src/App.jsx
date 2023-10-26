import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./component/Form";
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const newItem = { id: nanoid(), name: name, completed: false };
    setItems([...items, newItem]);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
