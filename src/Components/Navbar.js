import React from "react";
import "../Styles/nav.css";
import Data from "../Data/data.json";
import { Link } from "react-router-dom";
const MI = Data.MI;

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={MI} alt="Not" />
        </Link>
      </div>

      <Link className="navlinks" to="/#miphones">
        Link Mi Phones
      </Link>
      <Link className="navlinks" to="/#redmiphones">
        Link Redmi Phones
      </Link>
      <Link className="navlinks" to="/#tv">
        Link TV
      </Link>
      <Link className="navlinks" to="/#laptops">
        Link Laptops
      </Link>
      <Link className="navlinks" to="/#lifestyle">
        Link Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/#home">
        Link Home
      </Link>
      <Link className="navlinks" to="/#audio">
        Link Radio
      </Link>
      <Link className="navlinks" to="/#accessories">
        Accessories
      </Link>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
      </div>
      <div className="SearchIcon">
        <Link to="https://img.icons8.com/?size=100&id=132&format=png&color=000000"></Link>
      </div>
    </div>
  );
};

export default Navbar;
