import { useOutletContext } from "react-router-dom";
import Carousel from "../UI/Carousel";
import "./../Style/home.css";
import Card from "../UI/Card";

const Home = () => {
  const { restaurants, loading } = useOutletContext();

  return (
    <div className="home">
      <Carousel></Carousel>
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>
      <div className="home__card-container">
        {restaurants.map((res) => {
          return <Card res={res} show={true}></Card>;
        })}
      </div>
    </div>
  );
};

export default Home;
