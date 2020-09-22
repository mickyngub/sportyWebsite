import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Main";
import Promotion from "./Components/Promotion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Promotion />
      <div style={{ backgroundColor: "#f9dcc4", height: "20vh" }}></div>
      <div style={{ backgroundColor: "#fec89a", height: "20vh" }}></div>
    </div>
  );
}

export default App;
