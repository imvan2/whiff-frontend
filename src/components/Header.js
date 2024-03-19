import React from "react";
import Perfumes from "../pages/Perfumes/Perfumes";
import Brands from "../pages/Brands/Brands";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <Link to="/perfumes" className="header-h2">
          <a className="header-h2" href="/perfumes">
            Perfumes
          </a>
        </Link>

        <img
          src="whiff-logo.png"
          className="header-img"
          onClick={handleClick}
        />
        <Link to="/brands" className="header-h2">
          <a className="header-h2" href="/perfumes">
            Brands
          </a>
        </Link>
      </div>
    </>
  );
}

export default Header;
