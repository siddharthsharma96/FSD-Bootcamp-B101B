const Component2 = ({ val, as }) => {
  //   console.log(props);
  console.log(val, as);

  return (
    <>
      <h1>Component 2</h1>
      <p> {as}</p>
      {val}
    </>
  );
};

export default Component2;
