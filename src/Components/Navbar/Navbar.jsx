import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Assets/images/zairza_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="" className="logo" style={{width:"100px"}}/>
      </div>
      <div className="navbar__right">
        <Link to="/about" className="aboutUs-link">
          About us
        </Link>
        <Link to="/team" className="aboutUs-link">
          Teams
        </Link>
        <h4 className="navbar__text">Sign In</h4>
        <MenuIcon className="navbar__menu" />
      
      </div>
    </div>
  );
};

export default Navbar;