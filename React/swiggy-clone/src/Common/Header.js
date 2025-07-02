import { NavLink } from "react-router-dom";
import Links from "../UI/Links";
import listOfItems from "./../Utils/ListOfItems.json";
const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <NavLink to={"/"}>
          <img
            className="header__logo"
            src="https://svgsilh.com/svg/2085075.svg"
            alt="res Image"
          />
        </NavLink>
      </div>
      <div className="header__nav">
        <ul>
          {listOfItems.map((info) => {
            return (
              <Links
                url={info.url}
                name={info.name}
                cartItems={cartItems}
              ></Links>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
