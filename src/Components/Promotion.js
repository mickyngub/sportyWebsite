import React from "react";
import Card from "@material-ui/core/Card";
import promotionPic from "./../Assets/sale.jpg";
import "./Promotion.css";
const Promotion = () => {
  return (
    <div className="promotion_card_wrapper">
      <Card className="promotion_card">
        <img className="pic" src={promotionPic}></img>
      </Card>
    </div>
  );
};

export default Promotion;
