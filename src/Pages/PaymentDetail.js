import React from "react";
import Header from "../Components/Header";
import Payment from "../Components/Payment";
import "./FindCourt.css";

const PaymentDetail = () => {
  return (
    <div>
      <Header />

      <div className="body">
          <div className="findCourt-bg">
              <Payment/>
          </div>
      </div>
      {/* <MainSport /> */}
      
      {/* <Nearby /> */}
      
    </div>
  );
};

export default PaymentDetail;
