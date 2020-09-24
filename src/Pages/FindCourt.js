import React from "react";

import Header from "../Components/Header";
import { Link } from "react-router-dom";

import "./FindCourt.css";
import SearchIcon from "@material-ui/icons/Search";

const FindCourt = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="findCourt-bg">
          <div className="findCourt-content">
            <div className="content-line-1"> 
              <SearchIcon style={{paddingLeft:"10" ,color:'white',position: 'absolute',zIndex:"1000" }} />
              <input type="text" placeholder="พุทธมณฑลสาย 2" className="content-line-input"></input>
              <button className="content-line-button">ค้นหา</button>
            </div>
            <div className="content-line-2">ประเภทกีฬา : แบตมินตัน</div>
            <div className="content-line-3">
              <div >
                <div>วันที่</div>
                <div className="date">
                  <div>Fri 11 Sep</div>
                  <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </div>
              </div>
              <div>
                <div>เวลา</div>
                <div className="content-line-3-time">
                  <div className="time">
                    <div>18 : 00</div>
                    <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                          <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                  <div>ถึง</div>
                  <div className="time">
                    <div>20 : 00</div>
                    <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                          <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                  <button className="content-line-3-submit">ไม่ระบุเวลา</button>
                </div>
              </div>
            </div>
            <div className="content-line-4">
                <div className="content-line-4-numberOfCourt">
                  <div>จำนวนคอร์ท</div>
                  <div className="number_court">
                    <input type="number" className="content-line-4-number"></input>
                    <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                  </div>
                </div>
                <Link to="/courtlist" style={{ textDecoration: 'none',color:'black' }}>
                  <button className="content-line-4-submit">Submit</button>
                </Link>
            </div>
            {/* <div className="content-line">
              <div>จำนวนคอร์ท</div>
              <input type="number"></input>
            </div> */}

          </div>
        </div>
      </div>

    </div>
  );
};

export default FindCourt;
