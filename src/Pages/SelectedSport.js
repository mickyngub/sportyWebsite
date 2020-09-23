import React from "react";
import Header from "../Components/Header";

import MainReserve from "../Components/MainReserve";
import Promotion from "../Components/Promotion";
import Nearby from "../Components/Nearby";
import Footer from "../Components/Footer";

const SelectedSport = ({ sportType }) => {
  return (
    <>
      <Header />
      <div className="body">
      <MainReserve />
      <Promotion />
      <Nearby />
      <Footer/>
      </div>
      
    </>
  );
};

export default SelectedSport;
