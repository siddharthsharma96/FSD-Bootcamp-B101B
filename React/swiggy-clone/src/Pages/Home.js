import { useOutletContext } from "react-router-dom";
import Carousel from "../UI/Carousel";

const Home = () => {
  const { restaurants, loading } = useOutletContext();
  console.log("inside home", restaurants);

  return (
    <div className="home">
      <Carousel></Carousel>
      <h2 className="home__heading">Home Page</h2>
    </div>
  );
};

export default Home;
