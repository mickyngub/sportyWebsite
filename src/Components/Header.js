import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <SearchIcon />
        {/* <input style={{ margin: 10 }}></input> */}
        <TextField
          className="inputField"
          label="Search"
          variant="outlined"
        ></TextField>
      </div>
    </div>
  );
};

export default Header;
