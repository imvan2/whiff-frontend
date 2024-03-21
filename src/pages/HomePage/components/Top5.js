import React, { useEffect, useState } from "react";
import PerfumeIcon from "./PerfumeIcon";
import Top5Page from "../../Top5/Top5Page";

function Top5({ perfumes }) {
  const [perfumesData, setPerfumesData] = useState([]);

  useEffect(() => {
    // Update state with sorted array when the perfumes prop changes
    const perfumesSorted = [...perfumes].sort((a, b) => b.rating - a.rating);

    // Update state with sorted array
    setPerfumesData(perfumesSorted);
  }, [perfumes]);

  return (
    <>
      <div className="section">
        <h1 className="title">My Top 5</h1>

        {perfumesData.length > 0 && <PerfumeIcon perfumes={perfumesData} />}
      </div>
    </>
  );
}

export default Top5;
