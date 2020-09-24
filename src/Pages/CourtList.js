import React from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import CourtFind from "../Components/CourtFind";
import Footer from "../Components/Footer";

const CourtList = () => {
  return (
    <div>
      <Header />

      <div className="body">
      <SearchBar message="สนามที่ค้นพบ (21รายการ)"/>
      <CourtFind/>
      <Footer />
      </div>
      {/* <MainSport /> */}
      
      {/* <Nearby /> */}
      
    </div>
  );
};

export default CourtList;
