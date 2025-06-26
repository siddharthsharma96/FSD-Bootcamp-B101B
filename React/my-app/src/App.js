import "./App.css";
import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import GrandParent from "./GrandParent";
// import A, { Rahul } from "./Rahul";
function App() {
  // const element = React.createElement(
  //   "h1",
  //   { className: "hello1" },
  //   "This is again  a jsx but created directly"
  // ); //tag name,attributes,content
  let val = 10;
  let info = "i have 2 acre of land for you";
  return (
    <div className="App">
      {/* <h1 className="hello"> This is also a jsx</h1>
      {element}
      <Rahul></Rahul>
      <A></A> */}
      <Component1 val={val}></Component1>
      <Component2 val={val} as={"this is a prop"}></Component2>
      <GrandParent info={info}></GrandParent>
    </div>
  );
}

export default App;
