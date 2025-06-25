import "./App.css";
import About from "./About";
import React from "react";
import A, { Rahul } from "./Rahul";
function App() {
  const element = React.createElement(
    "h1",
    { className: "hello1" },
    "This is again  a jsx but created directly"
  ); //tag name,attributes,content
  return (
    <div className="App">
      <About></About>
      <h1 className="hello"> This is also a jsx</h1>
      {element}
      <Rahul></Rahul>
      <A></A>
    </div>
  );
}

export default App;
