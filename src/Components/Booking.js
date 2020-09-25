import React, {useState} from "react";
import "./Booking.css";
import { Link } from "react-router-dom";


const Booking = () => {
    const [price,setPrice] = useState(0);

  return (
    <div className="booking">
        <div className="booking-topic">รายละเอียดการจอง</div>
        <div className="booking-detail">
            <div className="detail-sub">
                <div>สถานที่</div>
                <div>พรหมลิขิต แบดมินตัน</div>
            </div>
            <div className="detail-sub">
                <div>วัน/เดือน/ปี</div>
                <div>12 / ก.ย. / 2563</div>
            </div>
            <div className="detail-sub">
                <div>เวลา</div>
                <div className="detail-sub">
                    <div>10:30 - 11:30</div>
                    <div>(1ชม.)</div>
                </div>
            </div>
            <div className="detail-sub">
                <div>จำนวนคอร์ท</div>
                <div>1</div>
            </div>
        </div>
        <div className="booking-price">
            <div>ราคา รวม ({price} บาท / ชม.)</div>
            <div >{price} (บาท)</div>
        </div>
        <div className="booking-payment">
            <div>การชำระเงิน</div>
            <div className="detail-sub">
                <div className="sub-price">
                    <svg style={{marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 24 24" width="80"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                    <div>การชำระผ่านบัตร</div>
                </div>
                <div className="sub-price">
                    <svg style={{marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 24 24" width="80"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"/></svg>
                    <div>โอนเงิน</div>
                </div>
                <div className="sub-price">
                    <svg style={{marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 24 24" width="80"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <div>ชำระที่สนาม</div>
                </div>
            </div>
        </div>
        <div className="booking-button">
            <Link to="/bookingpromo">
                <button className="booking-button-sub">คูปองส่วนลด</button>
            </Link>
            <Link to="/bookingpromo">
                <button className="booking-button-sub">ชำระเงิน</button>
            </Link>
        </div>
        
    </div>
  );
};

export default Booking;
