import React from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import Detail from "../Components/Detail";

const CourtDetail = () => {
  return (
    <div>
      <Header />

      <div className="body">
      <SearchBar message="พรหมลิขิต แบดมินตัน"/>
      <Detail/>
      </div>
      {/* <MainSport /> */}
      
      {/* <Nearby /> */}
      
    </div>
  );
};

export default CourtDetail;
