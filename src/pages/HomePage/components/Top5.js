import React, { useEffect, useState } from "react";
import PerfumeIcon from "./PerfumeIcon";

function Top5() {
  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);
  const orderByRating = true;

  // TODO: instead of looping, match the id of the designer
  const savingDesignerName = (designers, perfumes) => {
    for (let i = 0; i < perfumes.length; i++) {
      for (let j = 0; j < designers.length; j++) {
        if (perfumes[i]["designer"] == j + 1) {
          perfumes[i]["designer"] = designers[j]["name"];
        }
      }
    }
    setPerfumes(perfumes);
    ordering();
  };

  const ordering = () => {
    if (orderByRating) {
      // TODO: SORT BY RATING
      const perfumesSorted = [...perfumes].sort((a, b) => b.rating - a.rating);

      // Update state with sorted array
      setPerfumes(perfumesSorted);
    }
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
    // TODO: sort by new
    setPerfumes(perfumeData);
    setDesigner(designerData);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    // Run savingDesignerName function when perfumes or designers change
    savingDesignerName(designers, perfumes);
  }, [designers]);

  return (
    <>
      <div className="section">
        <a href="/top5" className="a-links">
          <h1 className="title">My top 5</h1>
        </a>
        {perfumes.length > 0 && <PerfumeIcon perfumes={perfumes} />}
      </div>
    </>
  );
}

export default Top5;
