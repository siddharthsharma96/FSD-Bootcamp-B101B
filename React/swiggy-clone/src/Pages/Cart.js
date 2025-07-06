import EmptyCart from "../UI/EmptyCart";
import "./../Style/cart.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import CartItems from "../UI/CartItems";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems, addItem, removeItem } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  console.log(process.env.REACT_APP_KEY);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      return (total += item.quantity * item.card.info.defaultPrice);
    });
    setTotalPrice(total / 100);
  }, [cartItems]);

  const redirectHandler = () => {
    navigate(`/`);
  };
  const options = {
    key: process.env.REACT_APP_KEY,
    key_secret: process.env.REACT_APP_SECRET_KEY,
    amount: parseInt(totalPrice * 100),
    currency: "INR",
    name: "ASDF",
    order_receipt: "order_rcptid_",
    description: "for testing",
    handler: function (response) {
      console.log(response);
    },
    theme: {
      color: "red",
    },
  };

  const handlePayment = () => {
    var as = new window.Razorpay(options);
    as.open();
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
