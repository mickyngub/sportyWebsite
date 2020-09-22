import React from "react";
import Card from "@material-ui/core/Card";
import promotionPic1 from "./../Assets/promotion1.png";
import promotionPic2 from "./../Assets/promotion2.png";

import "./Promotion.css";
const Promotion = () => {
  return (
    <div className="promotion_wrapper">
      <div className="promotion_card_wrapper">
        <Card className="promotion_card">
          <img className="pic" src={promotionPic1} alt="promotion1"></img>
        </Card>
        <Card className="promotion_card">
          <img className="pic" src={promotionPic2} alt="promotion2"></img>
        </Card>
      </div>
    </div>
  );
};

export default Promotion;
