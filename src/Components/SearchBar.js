import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import "./SearchBar.css";
const SearchBar = (props) => {
  return (
    <div className="search_wrapper">
      <SearchIcon style={{ paddingTop: "15", paddingRight: "10" }} />
      <TextField
        placeholder="ค้นหาจากที่ตั้ง/ชื่อสนาม"
        fullWidth
        className="inputField"
        label={props.message}
        variant="outlined"
      ></TextField>
    </div>
  );
};

export default SearchBar;
