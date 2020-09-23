import React from "react";
import Card from "@material-ui/core/Card";

import SearchBar from "./SearchBar";

import "./Main.css";
import golfPic from "./../Assets/golf1.jpg";
import footballPic from "./../Assets/football1.jpg";
import badmintonPic from "./../Assets/badminton1.jpg";
import tennisPic from "./../Assets/tennis1.jpg";

import { Link } from "react-router-dom";

const MainSport = () => {
  return (
    <div className="body_wrapper">
      <SearchBar />
      <div className="card_wrapper">
        <Card className="card_component">
          <Link to="/selectedsport">
            <img
              className="img_component"
              src={badmintonPic}
              alt="badminton"
            ></img>
          </Link>
        </Card>
        <Card className="card_component">
          <Link to="/selectedsport">
            <img className="img_component" src={tennisPic} alt="tennis"></img>
          </Link>
        </Card>
        <Card className="card_component">
          <Link to="/selectedsport">
            <img className="img_component" src={golfPic} alt="basketball"></img>
          </Link>
        </Card>
        <Card className="card_component">
          <Link to="/selectedsport">
            <img
              className="img_component"
              src={footballPic}
              alt="football"
            ></img>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default MainSport;
