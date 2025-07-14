import { NavLink } from "react-router-dom";

const Links = ({ url, name, cartItems }) => {
  return (
    <li>
      <NavLink to={url}>{name}</NavLink>
      {name === "Cart" && cartItems.length >= 1 && (
        <span className="cartItemCount">{cartItems.length}</span>
      )}
    </li>
  );
};

export default Links;
