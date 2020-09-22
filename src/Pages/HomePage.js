import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Promotion from "../Components/Promotion";
import Nearby from "../Components/Nearby";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Promotion />
      <Nearby />
      <Footer />
    </div>
  );
};

export default HomePage;
