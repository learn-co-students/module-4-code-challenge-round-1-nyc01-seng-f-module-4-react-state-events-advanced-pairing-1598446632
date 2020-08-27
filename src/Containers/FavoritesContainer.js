import React, { Component } from "react";
import BeyCard from "../Components/BeyCard"

export default class Favorites extends Component {

  beys = () => {
    return this.props.favBeys.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} deSelectBeys={this.props.deSelectBeys} favIdex />)
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        { this.beys() }
      </div>
    );
  }
}
