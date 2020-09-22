import React from "react";
import HomePage from "./Pages/HomePage";
import SelectedSport from "./Pages/SelectedSport";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/selectedsport" exact component={SelectedSport} />
          <Route path="/" render={() => <div>404 Bad Gateway</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
