import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import golfPic from "./../Assets/golf.png";
import footballPic from "./../Assets/ball.png";
import badmintonPic from "./../Assets/badminton.png";
import tennisPic from "./../Assets/tennis.png";
// import footballPic from "./../Assets/ball.png";
// import footballPic from "./../Assets/ball.png";

const Home = () => {
  return (
    <div className="card_wrapper">
      <Card className="card_component">
        <img src={badmintonPic} alt="badminton"></img>
      </Card>
      <Card className="card_component">
        <img src={tennisPic} alt="tennis"></img>
      </Card>
      <Card className="card_component">
        <img src={golfPic} alt="basketball"></img>
      </Card>
      <Card className="card_component">
        <img src={footballPic} alt="football"></img>
      </Card>
    </div>
  );
};

export default Home;
