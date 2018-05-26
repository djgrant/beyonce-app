import React, { Component } from "react";
import "./App.css";
import Albums from "../Albums/Albums";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Beyonce</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Section1} />
          <Route path="/about" component={Section2} />
          <Route path="/albums" component={Section3} />
        </div>
      </Router>
    );
  }
}

export default App;
