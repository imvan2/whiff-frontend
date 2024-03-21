import NewSection from "../HomePage/components/NewSection";
import Top5 from "../HomePage/components/Top5";
import React from "react";
import { useState, useEffect } from "react";

function Landing() {
  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);

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

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    // Run savingDesignerName function when perfumes or designers change
    savingDesignerName(designers, perfumes);
  }, [designers]);
  return (
    <>
      <NewSection perfumes={perfumes} />
      <Top5 perfumes={perfumes} />
    </>
  );
}

export default Landing;
