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
    </div>
  );
}

export default App;
