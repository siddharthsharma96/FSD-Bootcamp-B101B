import Parent from "./Parent";

const GrandParent = ({ info }) => {
  return (
    <div className="a">
      <h1>Granparent Area</h1>
      <Parent as={info}></Parent>
    </div>
  );
};

export default GrandParent;
