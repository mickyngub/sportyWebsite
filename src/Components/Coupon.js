import React from "react";
import "./Coupon.css";
import { Link } from "react-router-dom";
import Percent from "../Assets/percent.png"

const Coupon = () => {
  return (
    <div className="coupon">
        <input placeholder="Enter Promo Code" type="text" className="promo-code"></input>
        <div className="coupon-all">
            <div className="coupon-each">
                <img src={Percent} alt="percent" className="coupon-img"></img>
                <div className="coupon-each-text">
                    <div className="coupon-each-text-urgent">Limited Offer</div>
                    <div className="coupon-each-text-for">[New User] 80% from Sporty</div>
                    <div className="coupon-each-text-valid">Valid until 9 Sep 2021</div>
                </div>
                <button className="coupon-each-button">Use Now</button>
            </div>
            <div className="coupon-each">
                <img src={Percent} alt="percent" className="coupon-img"></img>
                <div className="coupon-each-text">
                    <div className="coupon-each-text-urgent">Limited Offer</div>
                    <div className="coupon-each-text-for">[New User] 80% from Sporty</div>
                    <div className="coupon-each-text-valid">Valid until 9 Sep 2021</div>
                </div>
                <button className="coupon-each-button">Use Now</button>
            </div>
            <div className="coupon-each">
                <img src={Percent} alt="percent" className="coupon-img"></img>
                <div className="coupon-each-text">
                    <div className="coupon-each-text-urgent">Limited Offer</div>
                    <div className="coupon-each-text-for">[New User] 80% from Sporty</div>
                    <div className="coupon-each-text-valid">Valid until 9 Sep 2021</div>
                </div>
                <button className="coupon-each-button">Use Now</button>
            </div>
            <div className="coupon-each">
                <img src={Percent} alt="percent" className="coupon-img"></img>
                <div className="coupon-each-text">
                    <div className="coupon-each-text-urgent">Limited Offer</div>
                    <div className="coupon-each-text-for">[New User] 80% from Sporty</div>
                    <div className="coupon-each-text-valid">Valid until 9 Sep 2021</div>
                </div>
                <button className="coupon-each-button">Use Now</button>
            </div>
        </div>
        <Link to="/paymentdetail">
            <button className="coupon-button">ตกลง</button>
        </Link>
    </div>
  );
};

export default Coupon;
