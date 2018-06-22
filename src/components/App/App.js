import React, { Component } from "react";
import "./App.css";
import Albums from "../Albums/Albums";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import HerAlbums from "../HerAlbums";

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

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/albums" component={HerAlbums} />
        </div>
      </Router>
    );
  }
}

export default App;
