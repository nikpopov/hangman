import React, { Component } from "react";
import Layout from "./Layout";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <div className="App">
          <div>Something here</div>
        </div>
      </div>
    );
  }
}

export default App;
