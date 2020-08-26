import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    // console.log("favorites name", this.props.name)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
