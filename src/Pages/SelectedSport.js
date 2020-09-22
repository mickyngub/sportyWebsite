import React from "react";
import Header from "../Components/Header";

import MainReserve from "../Components/MainReserve";
import Promotion from "../Components/Promotion";
import Nearby from "../Components/Nearby";

const SelectedSport = ({ sportType }) => {
  return (
    <>
      <Header />
      <MainReserve />
      <Promotion />
      <Nearby />
    </>
  );
};

export default SelectedSport;
