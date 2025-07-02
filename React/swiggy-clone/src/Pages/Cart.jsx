import { useOutletContext } from "react-router-dom";
import "./../Style/cart.css";
const Cart = () => {
  const { cartItems } = useOutletContext();

  return (
    <div className="cart">
      <h1>Cart Page</h1>
      {cartItems.length >= 1 ? (
        <div className="cart_itemd">
          {cartItems.length > 1 &&
            cartItems.map((r) => {
              const a = r.card.info;
              console.log(a);

              return (
                <p>
                  {a.name}
                  {r.quantity}
                  {"  "}
                  {a.defaultPrice / 100 || a.price / 100}
                </p>
              );
            })}
        </div>
      ) : (
        <p>EMpty</p>
      )}
    </div>
  );
};

export default Cart;
