import React from "react";
import sportyLogo from "./../Assets/sporty.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={sportyLogo} alt="logo"></img>

      <AccountCircleIcon
        className="icon"
        style={{ fontSize: "50", marginRight: "20" }}
        color="primary"
      ></AccountCircleIcon>
    </div>
  );
};

export default Header;
