import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class FavoritesContainer extends Component {

    renderFavorites = () => {
      if (this.props.appState.length > 0) {
      return this.props.appState.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} /> )
      } else {
        return null
      }

      // const favArr = []
      // if (this.props.appState.length > 0) {
      //   for (const beyObj of this.props.appState) {
      //     favArr.push(<BeyCard key={beyObj.id} bey={beyObj} />)
      //   }
      //   return favArr
      // } else {
      //   return null;
      // }


      // this.props.appState.map(beyArr => console.log("forEach", beyArr))
      
      // (beyArr => beyArr.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />))
    }

  render() {
    console.log("Rendering Action in FavContainer")

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFavorites()}
      </div>
    );
  }
}
