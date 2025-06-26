import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
function App() {
  // let value = 0;
  // val=variable;
  // setVal=Function to update the varible
  // useState=Hook
  // 0=default value
  let [val, setVal] = useState(0);

  let handleIncrement = () => {
    // val = val + 1;
    setVal(val + 1);
    console.log("Increment button is clicked", val);
  };
  console.log(val);

  let handleDecrement = () => {
    // val = val - 1;
    setVal(val - 1);
    console.log("Decrement button is clicked", val);
  };
  return (
    <div className="App">
      <h1>Going to Develope a new App</h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
