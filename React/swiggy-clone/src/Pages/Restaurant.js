import { useOutletContext, useParams } from "react-router-dom";
import "./../Style/restaurant.css";
import { useEffect, useState } from "react";
const Restaurant = () => {
  let { resId } = useParams();
  const { restaurants } = useOutletContext();
  const [res, setRes] = useState();

  useEffect(() => {
    const obj = restaurants.find((em) => {
      return em.info.id.toString() === resId;
    });
    setRes(obj);
  }, [resId, restaurants]);
  console.log("as", res);
  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumb">
        <span>Home/Noida/{res?.info?.name}</span>
      </div>
    </div>
  );
};

export default Restaurant;
