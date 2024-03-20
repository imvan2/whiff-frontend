import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PerfumeIcon from "./PerfumeIcon";

function NewSection() {
  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);
  const orderByNew = true;

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
    ordering();
  };

  const ordering = () => {
    const perfumesSorted = [...perfumes].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    // Update state with sorted array
    setPerfumes(perfumesSorted);
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
        <a href="/newly-added" className="a-links">
          <h1 className="title">Newly Added</h1>
        </a>
        {perfumes.length > 0 && <PerfumeIcon perfumes={perfumes} />}
      </div>
    </>
  );
}

export default NewSection;
