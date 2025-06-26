const Buttons = ({ Name, a, classs }) => {
  return (
    <button onClick={a} className={classs}>
      {Name}
    </button>
  );
};
export default Buttons;
