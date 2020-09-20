import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
const Home = () => {
  return (
    <div className="card_wrapper">
      <Card className="card_component">
        <Typography>This is 1st card</Typography>
      </Card>
      <Card className="card_component">
        <h4>This is 2nd card</h4>
      </Card>
      <Card className="card_component">This is 3rd card</Card>
      <Card className="card_component">This is 4th card</Card>
      <Card className="card_component">This is 5th card</Card>
      <Card className="card_component">This is 6th card</Card>
    </div>
  );
};

export default Home;
