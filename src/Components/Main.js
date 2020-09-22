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
    <div className="body_wrapper">
      <div className="card_wrapper">
        <Card className="card_component">
          <img
            className="img_component"
            src={badmintonPic}
            alt="badminton"
          ></img>
        </Card>
        <Card className="card_component">
          <img className="img_component" src={tennisPic} alt="tennis"></img>
        </Card>
        <Card className="card_component">
          <img className="img_component" src={golfPic} alt="basketball"></img>
        </Card>
        <Card className="card_component">
          <img className="img_component" src={footballPic} alt="football"></img>
        </Card>
      </div>
    </div>
  );
};

export default Home;
