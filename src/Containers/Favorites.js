import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {
  
  favBeyCards = () => {
    return this.props.beyObjects.map(beyObj => <BeyCard key={beyObj.id} beyObject={beyObj} appClickHandler={this.props.favoriteClickHandler}/>)
  }                                   

  render() {
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>

        {this.favBeyCards()}
        
      </div>
    );
  }

}
