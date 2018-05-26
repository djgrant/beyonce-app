import React, { Component } from "react";
import Albums from "../components/Albums/Albums"

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <h1>Albums</h1>
        <Albums />
      </section>
    );
  }
}

export default Section3;
