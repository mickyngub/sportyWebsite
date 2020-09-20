import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <SearchIcon />
        <input style={{ margin: 10 }}></input>
      </div>
    </div>
  );
};

export default Header;
