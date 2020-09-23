import React from "react";
import Header from "../Components/Header";
import MainSport from "../Components/MainSport";
import Promotion from "../Components/Promotion";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="body"></div>
      <MainSport />
      <Promotion />
      {/* <Nearby /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
