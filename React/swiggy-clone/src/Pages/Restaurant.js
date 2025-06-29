import { useParams } from "react-router-dom";

const Restaurant = () => {
  let { resId } = useParams();
  return (
    <div>
      <h1>Restaurant Page</h1>
      <h1>{resId}</h1>
    </div>
  );
};

export default Restaurant;
