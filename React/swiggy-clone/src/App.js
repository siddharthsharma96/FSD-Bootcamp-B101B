import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // add Items in cart
  const addItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.card?.info.id === item.card?.info.id
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      updateCart[existingIndex].quantity += 1;
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.card?.info.id === item.card?.info.id
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      if (updateCart[existingIndex].quantity > 1) {
        updateCart[existingIndex].quantity -= 1;
      } else {
        updateCart.splice(existingIndex, 1);
      }

      setCartItems(updateCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/restaurants"
        );
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data.data);
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
      <Header cartItems={cartItems}></Header>
      <Outlet
        context={{
          restaurants,
          loading,
          cartItems,
          setCartItems,
          addItem,
          removeItem,
          clearCart,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
