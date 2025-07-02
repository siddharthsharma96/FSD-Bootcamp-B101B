import { useOutletContext, useParams } from "react-router-dom";
import "./../Style/restaurant.css";
import { useEffect, useState } from "react";
import MenuItemShow from "../UI/MenuItemShow";
const Restaurant = () => {
  let { resId } = useParams();
  const { restaurants, cartItems, addItem, removeItem } = useOutletContext();
  const [res, setRes] = useState();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu.json");
        const data = await response.json();
        setMenu(data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(menu);
  }, [resId, restaurants]);

  useEffect(() => {
    const obj = restaurants.find((em) => {
      return em.info.id.toString() === resId;
    });
    setRes(obj);
    console.log(menu);
  }, [resId, restaurants]);

  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumb">
        <span>Home/Noida/{res?.info?.name}</span>
      </div>
      <div className="restaurant__container">
        <div className="restaurant__info">
          <p>{res?.info?.name}</p>
        </div>
        <div className="restaurant__services">
          <p>Order Online</p>
          <p>DineOut</p>
        </div>
        <div className="restaurant__menu">
          {menu.map((items) => {
            const title = items?.card.card.title;
            return (
              <div className="restaurant__menu-category">
                <div className="restaurant__menu-title">
                  <p>
                    {title}({items.card.card.itemCards.length})
                  </p>
                </div>
                <div className="restaurant__menu-items">
                  {items.card.card.itemCards &&
                    items.card.card.itemCards.map((r) => {
                      return (
                        <MenuItemShow
                          r={r}
                          cartItems={cartItems}
                          addItem={addItem}
                          removeItem={removeItem}
                        ></MenuItemShow>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
