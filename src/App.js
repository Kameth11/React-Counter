import React, { Component } from "react";
import Profile from "./Profile";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Counter</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
