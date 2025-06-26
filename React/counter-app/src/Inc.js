const Inc = ({ handleIncrement }) => {
  return (
    <button onClick={handleIncrement} className="inc">
      Increment
    </button>
  );
};

export default Inc;
