import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <div className="header">
      <SearchIcon></SearchIcon>
      <input></input>
    </div>
  );
};

export default Header;
