import { useOutletContext } from "react-router-dom";
import "./../Style/carousel.css";
import { useRef } from "react";
import Card from "./Card";
const Carousel = () => {
  const { restaurants } = useOutletContext();
  const slideContainerRef = useRef();

  const handlNextClick = () => {
    const slideWidth =
      slideContainerRef.current.querySelector(".carousel__slide").clientWidth;
    slideContainerRef.current.scrollLeft += slideWidth;
  };

  const handlPrevClick = () => {
    const slideWidth =
      slideContainerRef.current.querySelector(".carousel__slide").clientWidth;
    slideContainerRef.current.scrollLeft -= slideWidth;
  };
  return (
    <div className="carousel">
      <div className="carousel__container">
        <h2 className="carousel__title">Top restaurant chains in Noida</h2>
        <div className="carousel__controls">
          <button className="carousel__arrow" onClick={handlPrevClick}>
            <img src="/images/left.png"></img>
          </button>
          <button className="carousel__arrow" onClick={handlNextClick}>
            <img src="/images/right.png"></img>
          </button>
        </div>
      </div>
      <section className="carousel__slider">
        <ul className="carousel__slides" ref={slideContainerRef}>
          {restaurants.map((res) => {
            return (
              <li className="carousel__slide">
                <Card res={res}></Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
