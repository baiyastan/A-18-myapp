import "./App.css";
import ItemComponent from "./Item";
import Service from "./components/Service";
import Person from "./components/Props/Person";
import Card from "./components/Props/Card";
import Product from "./components/Props/Product";

import { products } from "./data";

function App() {
  return (
    <div className="App">
      <div className="service">
        {products.map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
