import React from "react";
import Card from "@material-ui/core/Card";

import court1 from "../Assets/court1.png";
import court2 from "../Assets/court2.png";
import "./Nearby.css";

const Nearby = () => {
  return (
    <div className="body_nearby">
      <div className="body_nearby_wrapper">
        <Card className="nearby_card">
          <img className="pic" src={court1} alt="court1"></img>
        </Card>
        <Card className="nearby_card">
          <img className="pic" src={court2} alt="court1"></img>
        </Card>
      </div>
    </div>
  );
};

export default Nearby;
