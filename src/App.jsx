import { useState } from "react";
import Form from "./component/Form"
const App = () => {
  const [items,setItems] = useState([]);
  return <section className="section-center">
    <Form/>
  </section>;
};

export default App;
