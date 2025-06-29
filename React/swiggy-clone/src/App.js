import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/Restaurant.json");
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        }
      } catch (err) {
        console.log("Fail to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <Header></Header>
      <h1>Hello world</h1>
      <Outlet context={{ restaurants, loading }}></Outlet>
    </div>
  );
}

export default App;
