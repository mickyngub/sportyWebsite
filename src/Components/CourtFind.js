import React from "react";
import Phromlikit from "../Assets/phromlikit.png";
import location from "../Assets/location.png";
import Tananon from "../Assets/tananon.png";
import { Link } from "react-router-dom";

import "./CourtFind.css";
const CourtFind = () => {
  return (
      <div className="courtfind">
          <div className="courtfind-list">
              <div className="courtfind-list-sub">
                <img src={Phromlikit} className="courtfind-list-pic" alt="court"></img>
                <div className="courtfind-list-sub-text">
                  <div>พรหมลิขิต แบดมินตัน</div>
                  <div>220 บาท/ชม.</div>
                  <div className="courtfind-list-sub-location">
                    <img className="nearby-logo" src={location} alt="location"></img>
                    <div>1.2 กม. - 59, 7 ถนน บรมราชชนนี..</div>
                  </div>
                  <Link to="/courtdetail"><button className="courtfind-list-sub-button">SELECT</button></Link>
                </div>
              </div>
          </div>
      
          <div className="courtfind-list">
              <div className="courtfind-list-sub">
                <img src={Tananon} className="courtfind-list-pic" alt="court"></img>
                <div className="courtfind-list-sub-text">
                  <div>ธนานนท์แบดมินตัน แอนด์ ฟิตเนส</div>
                  <div>200 บาท/ชม.</div>
                  <div className="courtfind-list-sub-location">
                    <img className="nearby-logo" src={location} alt="location"></img>
                    <div>4.2 กม. - 32 22 บางแวก 50 แขวง...</div>
                  </div>
                  <Link to="/courtdetail"><button className="courtfind-list-sub-button">SELECT</button></Link>
                </div>
              </div>
          </div>
      </div>
  );
};

export default CourtFind;
