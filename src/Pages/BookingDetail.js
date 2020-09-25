import React from "react";
import Header from "../Components/Header";
import Booking from "../Components/Booking";
import "./FindCourt.css";

const BookingDetail = () => {
  return (
    <div>
      <Header />

      <div className="body">
          <div className="findCourt-bg">
              <Booking/>
          </div>
      </div>
      {/* <MainSport /> */}
      
      {/* <Nearby /> */}
      
    </div>
  );
};

export default BookingDetail;
