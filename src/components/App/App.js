import React, { Component } from "react";
import "./App.css";
import Albums from "../Albums/Albums";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import AlbumList from "../AlbumList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
          <Route path="/albums" component={AlbumList} />
        </div>
      </Router>
    );
  }
}

export default App;
