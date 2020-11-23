import React from "react";
import Navbar from "./Navbar/Navbar";
import HomeTop from "./Home/HomeTop";
import DocList from "./Home/DocList";

import Footer from "./Footer/Footer.js";
import HomeBottom from "./Home/HomeBottom.js";
import Recibo from './Documents/Recibo/index'

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mobile-padding">
        <Route exact path="/">
          <HomeTop />
          <HomeBottom />
          <DocList />
        </Route>
        <Route path="/recibo">
          <Recibo />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
