import "./App.css";
import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
function App() {
  let [val, setVal] = useState(0);
  let ch = useRef();
  let handleIncrement = () => {
    setVal(val + 1);
  };

  let handleDecrement = () => {
    setVal(val - 1);
  };

  // useEffect(callback function,array of dependencies);
  // case 1:without array of dependencies
  // It works when any state is chnaging
  // useEffect(() => {
  //   console.log("without array ");
  // });
  // case 2:empty array
  // it will run only one time at the time of rendering
  // useEffect(() => {
  //   console.log("with emty array");
  // }, []);
  // case 3:with dependencies
  // run when state update
  useEffect(() => {
    if (val < 0) {
      let timer = setTimeout(() => {
        setVal(0);
        console.log("clicked");
      }, 2000);
      ch.current.style.color = "red";
      // cleanup Function
      return () => {
        clearTimeout(timer);
      };
    }
    ch.current.style.color = "green";
    console.log(ch);
  }, [val]);
  return (
    <div className="App">
      <h1 ref={ch}>Going to Develope a new App</h1>
      <p>{}</p>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
