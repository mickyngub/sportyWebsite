import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Promotion from "./Components/Promotion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Promotion />
      <div style={{ backgroundColor: "#457b9d", height: "20vh" }}></div>
      <div style={{ backgroundColor: "#1d3557", height: "20vh" }}></div>
    </div>
  );
}

export default App;
