import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  createBeyCards = () => {

    const filteredArray = this.props.beys.filter(bey => {
      return(bey.favorite === true) 
    })

    return (filteredArray.map(bey => {
        return(<BeyCard key={bey.id} appClickHandler={this.props.appClickHandler} bey={bey}/>)
      } 
    ))
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.createBeyCards()}
      </div>
    );
  }
}
