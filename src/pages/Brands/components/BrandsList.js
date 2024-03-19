import React, { useEffect, useState } from "react";
import DesignerIcon from "./DesignerIcon";

function BrandsList() {
  const [perfumes, setPerfumes] = useState([]);
  const [designers, setDesigner] = useState([]);

  const fetchingData = async () => {
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

    setDesigner(designerData);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return <>{designers.length > 0 && <DesignerIcon designers={designers} />}</>;
}

export default BrandsList;
