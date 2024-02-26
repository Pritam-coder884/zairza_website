import React from "react";
import "./HomeSection.scss";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeSection = ({
  title,
  titleColor,
  description,
  buttonText,
  buttonBackground,
  buttonLink,
}) => {
  return (
    <div className="home-section">
      {title && (
        <div className="title" style={{ color: titleColor }}>
          {title}
        </div>
      )}
      {description && <div className="description">{description}</div>}
      <Link to={buttonLink} style={{textDecoration:"none"}}>
        <div
          className="button"
          style={{ backgroundColor: buttonBackground, height: "2.8  rem" }}
        >
          <button
            className="home-section-btn"
            style={{ backgroundColor: buttonBackground, fontSize: "1.1rem" }}
          >
            {buttonText}
          </button>
          <ArrowForwardIcon
            className="arrow-icon"
            style={{ fontSize: "1.3rem" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default HomeSection;
