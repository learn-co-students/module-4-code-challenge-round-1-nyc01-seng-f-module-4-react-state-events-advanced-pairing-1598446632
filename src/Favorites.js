import React, { Component } from "react";
import BeyCard from "./BeyCard";

export default class Favorites extends Component {

  render() {

    let mapFav =()=> this.props.bey.map((bey)=> <BeyCard bey={bey} onClick={this.this.beyClickHandler}/>)
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {mapFav()}
        
      </div>
    );
  }
}
