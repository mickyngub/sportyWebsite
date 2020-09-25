import React from "react";
import Header from "../Components/Header";
import "./FindCourt.css";
import Coupon from "../Components/Coupon";

const BookingPromo = () => {
  return (
    <div>
      <Header />

      <div className="body">
          <div className="findCourt-bg">
              <Coupon/>
          </div>
      </div>
      {/* <MainSport /> */}
      
      {/* <Nearby /> */}
      
    </div>
  );
};

export default BookingPromo;
