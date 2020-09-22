import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

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
      <div className="search_wrapper">
        <SearchIcon style={{ paddingTop: "15", paddingRight: "10" }} />
        <TextField
          placeholder="ค้นหาจากที่ตั้ง/ชื่อสนาม"
          fullWidth
          className="inputField"
          label="Search"
          variant="outlined"
        ></TextField>
      </div>

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
