import React from "react";
import SearchBar from "./SearchBar";

import "./Main.css";
import badmintonPic from "./../Assets/badminton-last.png";
import footballPic from "./../Assets/football-last.jpg";
import golfPic from "./../Assets/Golf-last.png";
import tennisPic from "./../Assets/tennis-last.png";


// import badmintonPic from "./../Assets/badminton-last.png";

import { Link } from "react-router-dom";

const MainSport = () => {
  return (
    <div className="body_wrapper">
      <SearchBar />
      <div className="card_wrapper-text">Sport</div>
      <div className="card_wrapper">
        <div className="card-wrapper-sub">
          <Link to="/selectedsport" style={{ textDecoration: 'none',color:'black' }}>
            <img src={badmintonPic} alt="badminton-img" className="card-wrapper-sub-pic"></img>
            <div className="card-wrapper-sub-text">BADMINTON</div>
          </Link>
        </div>
        <div className="card-wrapper-sub">
          <Link to="/selectedsport" style={{ textDecoration: 'none',color:'black' }}>
            <img src={footballPic} alt="badminton-img" className="card-wrapper-sub-pic"></img>
            <div className="card-wrapper-sub-text">FOOTBALL</div>
          </Link>
        </div>
        <div className="card-wrapper-sub">
          <Link to="/selectedsport" style={{ textDecoration: 'none',color:'black' }}>
            <img src={golfPic} alt="badminton-img" className="card-wrapper-sub-pic"></img>
            <div className="card-wrapper-sub-text">GOLF</div>
          </Link>
        </div>
        <div className="card-wrapper-sub">
          <Link to="selectedsport" style={{ textDecoration: 'none',color:'black' }}>
            <img src={tennisPic} alt="badminton-img" className="card-wrapper-sub-pic"></img>
            <div className="card-wrapper-sub-text">TENNIS</div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default MainSport;
