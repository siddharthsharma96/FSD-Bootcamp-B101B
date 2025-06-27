import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink
          to={"/"}
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"/search"}
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          Search
        </NavLink>
        <NavLink
          to={"/cart"}
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>
      </header>
      <h1>Learning Routing</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
