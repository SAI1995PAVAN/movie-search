import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const { handleSearch, value, onClick } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        id="search-movie"
        onChange={handleSearch}
        value={value}
      />
      <button id='search-button' onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchBox;
