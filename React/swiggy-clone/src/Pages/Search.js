import { useEffect, useState } from "react";
import "./../Style/search.css";
import { useOutletContext } from "react-router-dom";
const Search = () => {
  const { restaurants } = useOutletContext();
  const [inputValue, setInputValue] = useState("");
  const handlechange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const timerId = setTimeout(() => {}, 1000);
    return () => clearTimeout(timerId);
  }, [inputValue]);
  return (
    <div className="search">
      <h1>Search Page</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Serach restiurant"
        className="search__filed"
        onChange={handlechange}
      ></input>
      {inputValue}
    </div>
  );
};

export default Search;
