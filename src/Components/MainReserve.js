import React from "react";

import SearchBar from "../Components/SearchBar";

import "./Main.css";

import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { Link } from "react-router-dom";

const MainReserve = () => {
  return (
    <div className="body_wrapper">
      <SearchBar/>

      <div className="card_wrapper">
        <div className="card-wrapper-sub">
          <Link to="/findcourt" style={{ textDecoration: 'none',color:'black' }}>
            <YoutubeSearchedForIcon style={{ fontSize: "200",margin:'20px' }} />
            <div className="card-wrapper-sub-text">จองคอร์ท/สนาม</div>
          </Link>
        </div>
        <div className="card-wrapper-sub">
          <Link to="/findcourt" style={{ textDecoration: 'none',color:'black' }}>
            <MonetizationOnIcon style={{ fontSize: "200",margin:'20px' }} />
            <div className="card-wrapper-sub-text">ส่วนลดและแพคเกจ</div>
          </Link>
        </div>
        <div className="card-wrapper-sub">
          <Link to="/findcourt" style={{ textDecoration: 'none',color:'black' }}>
          <EventAvailableIcon style={{fontSize: "200",margin:'20px'  }} />
            <div className="card-wrapper-sub-text">จองอีกครั้ง</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainReserve;
