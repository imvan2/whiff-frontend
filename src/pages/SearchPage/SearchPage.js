import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PerfumeIcon from "../HomePage/components/PerfumeIcon";
import { useOutletContext } from "react-router-dom";

// TODO: search by full name ex "angel by mugler"
// TODO: search by brand name ex "mugler"
// TODO: change the search capitilization ex "angel" to "Angel"
// TODO: change the caps on multiple words

/** SearchPage is a react component that renders search results
 * based on the search input from SearchBar.js
 *
 * No props
 * Gets two states from parent component: search input and perfumes object
 **/
function SearchPage() {
  // Gets the state using React location comes from SearchBar.js navigate
  let location = useLocation();

  let searchName = "";
  let searchBrand = "";
  let searchArray = [];
  let search = "";

  // TODO: is there a way to refactor this so it's not so long?
  // TODO: maybe keep the split as a list, then compare the search against that list
  // Checking if the string contains "by"
  // Break apart the string to search
  if (location.state.includes(" by ")) {
    searchName = location.state.split(" by ")[0];
    searchBrand = location.state.split(" by ")[1];

    // Capitalizing the first letter of the string
    searchName = searchName.toLowerCase();
    searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);

    searchBrand = searchBrand.toLowerCase();
    searchBrand = searchBrand.charAt(0).toUpperCase() + searchBrand.slice(1);
  } else {
    searchArray = location.state.split(" ");

    if (searchArray.length > 0) {
      for (let i = 0; i < searchArray.length; i++) {
        searchArray[i] = searchArray[i].toLowerCase();
        searchArray[i] =
          searchArray[i].charAt(0).toUpperCase() + searchArray[i].slice(1);
      }
      search = searchArray.join(" ");
    } else {
      search = location.state.toLowerCase();
      search = search.charAt(0).toUpperCase() + search.slice(1);
    }
  }

  // Gets the state from Outlet in Landing.js
  const [perfumes, designers] = useOutletContext();

  // Sets state of perfume results
  const [perfumeResults, setPerfumeResults] = useState([]);

  const searchResults = () => {
    let matches = [];

    for (let i = 0; i < perfumes.length; i++) {
      // console.log(
      //   "is this true or false",
      //   perfumes[i]["name"].includes(location.state)
      // );
      if (
        perfumes[i]["name"] === searchName &&
        perfumes[i]["designer"] === searchBrand
      ) {
        matches.push(perfumes[i]);
      } else if (perfumes[i]["name"].includes(search)) {
        matches.push(perfumes[i]);
      } else if (perfumes[i]["designer"].includes(search)) {
        matches.push(perfumes[i]);
      }
    }
    setPerfumeResults(matches);
  };

  useEffect(() => {
    // Run savingDesignerName function when perfumes or designers change
    // savingDesignerName(designers, perfumes);
    searchResults();
  }, [perfumes, location.state]);

  return (
    <>
      <div>
        {console.log(perfumeResults)}
        {perfumeResults ? (
          <PerfumeIcon perfumes={perfumeResults} />
        ) : (
          <p>Sorry, no such perfumes!</p>
        )}
      </div>
    </>
  );
}

export default SearchPage;
