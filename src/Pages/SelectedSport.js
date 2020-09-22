import React from "react";
import Header from "../Components/Header";
import Promotion from "../Components/Promotion";
import Nearby from "../Components/Nearby";

const SelectedSport = ({ sportType }) => {
  return (
    <>
      <Header />
      <Promotion />
      <Nearby />
    </>
  );
};

export default SelectedSport;
