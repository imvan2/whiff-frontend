import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsSearch(true);
      navigate("/search", { state: searchInput });
    }
  };

  //  condition ? true : false

  // if search is true = remove the top5 and new sections and replace it with the searchpage
  // if search is false, show top5 and new
  return (
    <>
      <input
        type="text"
        placeholder="Search by perfume name"
        className="search-bar"
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyUp={(e) => handleKeyPress(e)}
      />
      {/* {isSearch && <SearchPage />} */}
    </>
  );
}

export default SearchBar;
