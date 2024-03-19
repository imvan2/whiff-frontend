import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PerfumeIcon(perfumes) {
  const perfumesData = perfumes["perfumes"];
  const [hoveringID, setHoveringID] = useState();

  const handleMouseOver = (id) => {
    setHoveringID(id);
  };

  const handleMouseOut = () => {
    setHoveringID(undefined);
  };

  return (
    <>
      <div className="image-section">
        {perfumesData.slice(0, 5).map((perfume, id) => (
          <div key={id} className="img__wrap">
            <img
              onMouseEnter={() => handleMouseOver(id)}
              onMouseLeave={() => handleMouseOut()}
              src={perfume.image}
              className="image"
              alt=""
            ></img>
            {/* image description is hidden with css unless hovered over */}
            <Link
              to={`perfume-details/${perfume.name}%by%${perfume.designer}`}
              state={perfume}
            >
              <div className="img__description">
                <h3 className="perfume-name">{perfume.name}</h3>
                <h4 className="designer-name">{perfume.designer}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default PerfumeIcon;
