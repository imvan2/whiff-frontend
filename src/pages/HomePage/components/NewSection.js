import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PerfumeIcon from "./PerfumeIcon";
import NewPerfume from "../../NewPerfumes/NewPerfumes";

function NewSection({ perfumes }) {
  const [perfumesData, setPerfumesData] = useState([]);

  useEffect(() => {
    // Update state with sorted array when the perfumes prop changes
    // [...perfumes] = shallow copies of the perfumes array, changes are not reflected
    const perfumesSorted = [...perfumes].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    setPerfumesData(perfumesSorted);
  }, [perfumes]);

  return (
    <>
      <div className="section">
        <h1 className="title">Newly Added</h1>
        {perfumesData.length > 0 && <PerfumeIcon perfumes={perfumesData} />}
      </div>
    </>
  );
}

export default NewSection;
