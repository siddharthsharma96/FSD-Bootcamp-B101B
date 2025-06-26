import GrandChild from "./GrandChild";

const Parent = ({ as }) => {
  console.log(as);

  return (
    <div className="c">
      <h1>Parent area</h1>
      <GrandChild a={as}></GrandChild>
    </div>
  );
};

export default Parent;
