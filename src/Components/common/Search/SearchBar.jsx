import React from "react";
import "./searchbar.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({search_title}) => {
  return (
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <p className="search-text">Search for any {search_title}</p>
      </div>
  );
};

export default SearchBar;
