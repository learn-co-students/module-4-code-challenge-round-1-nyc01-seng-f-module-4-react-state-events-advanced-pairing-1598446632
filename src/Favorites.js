import React, { Component } from "react";
import BeyCard from './BeyCard.js'



class Favorites extends Component {

  renderBeys = () => {
    return this.props.bey.map(beyonceObj => <BeyCard key={beyonceObj.id} bey={beyonceObj} appClickHandler={this.props.appClickHandler} />)
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

export default Favorites

