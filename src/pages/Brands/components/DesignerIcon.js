import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DesignerIcon(designers) {
  const designersData = designers["designers"];

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
        {designersData.map((designer, id) => (
          <div key={id} className="img__wrap">
            <img
              onMouseEnter={() => handleMouseOver(id)}
              onMouseLeave={() => handleMouseOut()}
              src={designer.logo}
              className="image"
              alt=""
            ></img>
            {/* image description is hidden with css unless hovered over */}
            {/* <Link to={`brands/${designer}`} state={designer}>
              <div className="img__description">
                <h4 className="designer-name">{designer}</h4>
              </div>
            </Link> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default DesignerIcon;
