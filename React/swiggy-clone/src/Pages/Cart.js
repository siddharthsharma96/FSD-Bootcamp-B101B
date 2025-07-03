import EmptyCart from "../UI/EmptyCart";
import "./../Style/cart.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import CartItems from "../UI/CartItems";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems, addItem, removeItem } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  console.log(process.env.REACT_APP_HELLO);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.card.info.defaultPrice;
    });
    setTotalPrice(total / 100);
  }, [cartItems]);

  const redirectHandler = () => {
    navigate(`/`);
  };
  const handlePayment = () => {
    console.log("hello world");
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <EmptyCart redirectHandler={redirectHandler} />
      ) : (
        <CartItems
          cartItems={cartItems}
          removeItem={removeItem}
          addItem={addItem}
          totalPrice={totalPrice}
          handlePayment={handlePayment}
        />
      )}
    </div>
  );
};

export default Cart;
