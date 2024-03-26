import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PerfumeIcon from "../HomePage/components/PerfumeIcon";

function SearchPage() {
  let location = useLocation();
  console.log("location:", location.state);

  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);
  const perfumeResults = [];

  // TODO: instead of looping, match the id of the designer
  const savingDesignerName = (designers, perfumes) => {
    for (let i = 0; i < perfumes.length; i++) {
      for (let j = 0; j < designers.length; j++) {
        if (perfumes[i]["designer"] === designers[j]["id"]) {
          perfumes[i]["designer"] = designers[j]["name"];
        }
      }
    }
    setPerfumes(perfumes);
  };

  const fetchingData = async () => {
    const perfumeResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/perfume`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const perfumeData = await perfumeResponse.json();

    const designersResponse = await fetch(
      `https://whiff-backend-5f278bf19e19.herokuapp.com/api/designers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const designerData = await designersResponse.json();
    setPerfumes(perfumeData);
    setDesigner(designerData);
  };

  const searchResults = () => {
    for (let i = 0; i < perfumes.length; i++) {
      console.log(perfumes[i]["name"].includes(location.state));
      if (perfumes[i]["name"].includes(location.state)) {
        perfumeResults.push(perfumes[i]);
      }
    }
    console.log(perfumeResults);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    // Run savingDesignerName function when perfumes or designers change
    savingDesignerName(designers, perfumes);
    searchResults();
  }, [designers, perfumeResults, location.state]);

  // TODO: iterate over perfumes and find if there's a match

  return (
    <>
      <div>
        {perfumeResults.length > 0 ? (
          <PerfumeIcon perfumes={perfumeResults} />
        ) : (
          <p>Sorry, no such perfumes</p>
        )}
      </div>
    </>
  );
}

export default SearchPage;
