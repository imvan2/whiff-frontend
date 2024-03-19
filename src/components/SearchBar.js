import React from "react";
import { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="center">
        <input
          type="text"
          placeholder=""
          onChange={handleChange}
          className="search-bar"
        ></input>
      </div>
    </>
  );
}

export default SearchBar;
