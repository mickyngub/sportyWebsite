import React from "react";
import Card from "@material-ui/core/Card";

import SearchBar from "../Components/SearchBar";

import "./Main.css";

import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { Link } from "react-router-dom";

const MainReserve = () => {
  return (
    <div className="body_wrapper">
      <SearchBar />

      <div className="card_wrapper">
        <Card className="card_component">
          <Link to="/findcourt">
            <YoutubeSearchedForIcon style={{ fontSize: "150" }} />
          </Link>
        </Card>
        <Card className="card_component">
          <Link to="/findcourt">
            <MonetizationOnIcon style={{ fontSize: "150" }} />
          </Link>
        </Card>
        <Card className="card_component">
          <Link to="/findcourt">
            <EventAvailableIcon style={{ fontSize: "150" }} />
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default MainReserve;
