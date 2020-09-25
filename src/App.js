import React from "react";
import HomePage from "./Pages/HomePage";
import SelectedSport from "./Pages/SelectedSport";
import FindCourt from "./Pages/FindCourt";
import CourtList from "./Pages/CourtList";
import CourtDetail from "./Pages/CourtDetail";
import BookingDetail from "./Pages/BookingDetail";
import BookingPromo from "./Pages/BookingPromo";
import PaymentDetail from "./Pages/PaymentDetail";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/selectedsport" exact component={SelectedSport} />
          <Route path="/findcourt" exact component={FindCourt} />
          <Route path="/courtlist" exact component={CourtList} />
          <Route path="/courtdetail" exact component={CourtDetail} />
          <Route path="/bookingdetail" exact component={BookingDetail} />
          <Route path="/bookingpromo" exact component={BookingPromo} />
          <Route path="/paymentdetail" exact component={PaymentDetail}/>
          <Route path="/" render={() => <div>404 Bad Gateway</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
