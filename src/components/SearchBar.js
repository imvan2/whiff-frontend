import React from "react";
import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        className="search-bar"
      ></input>
    </>
  );
}

export default SearchBar;
