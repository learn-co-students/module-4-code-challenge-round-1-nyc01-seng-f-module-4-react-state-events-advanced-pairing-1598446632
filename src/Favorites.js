import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  beyCards = () => {return(this.props.beyArray.map(bey => {
    console.log(bey.favorite)
    if (bey.favorite === true) {
    return (<BeyCard appClickHandler={this.props.appClickHandler} bey={bey}/>)}
    }))}
  
  
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.beyCards()}
      </div>
    );
  }
}
