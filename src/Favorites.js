import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  createFavorites = () => {

    const favoritesArray = this.props.beys.filter(bey => {
      return(bey.favorite === true) 
    })

    return (favoritesArray.map(bey => {
        return(<BeyCard key={bey.id} appClickHandler={this.props.appClickHandler} bey={bey}/>)
      } 
    ))
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.createFavorites()}
      </div>
    );
  }
}
