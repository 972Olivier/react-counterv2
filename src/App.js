import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([0, 0, 0]);

  return (
    <div className="App">
      <header>
        <span>⏱</span>
        <h1>React Counter V2</h1>{" "}
      </header>
      <Counter counter={counter} setCounter={setCounter}></Counter>
      <Footer></Footer>
    </div>
  );
}

export default App;
