import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  
  makeFaves = () => {
    return this.props.kablamo.map((bey) => <BeyCard key={bey.id} beyInfo={bey} appClickHandler={this.props.appClickHandler} />)
  }
  
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.makeFaves()}
      </div>
    );
  }
}
