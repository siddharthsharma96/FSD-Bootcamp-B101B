import { NavLink } from "react-router-dom";

const Links = ({ url, name }) => {
  return (
    <li>
      <NavLink to={url}>{name}</NavLink>
    </li>
  );
};

export default Links;
