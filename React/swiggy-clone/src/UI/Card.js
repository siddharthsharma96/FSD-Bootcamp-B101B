import { useNavigate } from "react-router-dom";

const Card = ({ res, show }) => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/restaurant/${res._id}`);
  };
  console.log(res._id);

  return (
    <div className="card" onClick={redirectHandler}>
      <img src={`/images/${res.cloudinaryImageId}.avif`} />
      <div className="card__details">
        <h3 className="card__name">{res.name}</h3>
        {show && (
          <>
            <div className="card__cuisines">{res.cuisines.join(", ")}</div>
            <div className="card__price">{res.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">{res.avgRating}</span>
              <span className="card__time">3.2 mins</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
