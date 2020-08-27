import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'
export default class FavoritesContainer extends Component {
  render() {
    let beys = this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} favorite />)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beys}
      </div>
    );
  }
}
