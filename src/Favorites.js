import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  
  renderBeys = () => {
    return this.props.bey.map(beyonceObj => <BeyCard key={beyonceObj.id} bey={beyonceObj} reverseBey={this.props.favoriteReverseBey}/>)
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
