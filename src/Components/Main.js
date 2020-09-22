import React from "react";
import Card from "@material-ui/core/Card";

import SearchBar from "./SearchBar";

import "./Main.css";
import golfPic from "./../Assets/golf.png";
import footballPic from "./../Assets/ball.png";
import badmintonPic from "./../Assets/badminton.png";
import tennisPic from "./../Assets/tennis.png";
// import footballPic from "./../Assets/ball.png";
// import footballPic from "./../Assets/ball.png";

import { Link } from "react-router-dom";

const Home = () => {
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

export default Home;
