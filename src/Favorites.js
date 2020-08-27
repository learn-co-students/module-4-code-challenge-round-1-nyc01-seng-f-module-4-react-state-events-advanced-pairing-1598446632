import React, { Component } from "react";
import BeyCard from './BeyCard';

export default class Favorites extends Component {
 
    filterBeys = () => {
       return this.props.array.filter((obj) => obj.name.toLowerCase().includes(this.props.userInput.toLowerCase()))
        }
      

  render() {
   
    let filteredBeys = this.filterBeys().map((card) => <BeyCard key={card.id} bey={card} clickHandler={this.props.clickHandler}/>)

    return ( 
      <div className="favorites">
        <h1>Favorites</h1>
       {filteredBeys}
      
      </div>
    );
  }
}
