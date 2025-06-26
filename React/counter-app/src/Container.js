import Buttons from "./Buttons";
// import Dec from "./Dec";
// import Inc from "./Inc";

const Container = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="buttonContainer">
      <Buttons Name={"Increment"} a={handleIncrement} classs={"inc"}></Buttons>
      <Buttons Name={"Decrement"} a={handleDecrement} classs={"dec"}></Buttons>
      {/* <Inc handleIncrement={handleIncrement}></Inc> */}
      {/* <Dec handleDecrement={handleDecrement}></Dec> */}
    </div>
  );
};

export default Container;
