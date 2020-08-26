import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class FavoritesContainer extends Component {

  render() {
    console.log("Rendering Action in FavContainer", this.props.appState)

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        { (this.props.appState.favorite === true) ? <BeyCard bey={this.props.appState} /> : null }

      </div>
    );
  }
}
