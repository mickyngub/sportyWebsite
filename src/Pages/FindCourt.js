import React from "react";

import Header from "../Components/Header";

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
              <div>
                <div>วันที่</div>
                <div>Fri 11 Sep</div>
              </div>
              <div>
                <div>เวลา</div>
                <div className="content-line-3-time">
                  <div>18 : 00</div>
                  <div>ถึง</div>
                  <div>20 : 00</div>
                  <button>ไม่ระบุเวลา</button>
                </div>
              </div>
            </div>
            <div className="content-line-4">
                จำนวนคอร์ท
                <input type="number" className="content-line-4-number"></input>
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
