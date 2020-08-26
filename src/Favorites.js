import React, { Component } from "react";
import BeyCard from './BeyCard.js'
import beyArray from './api.js'


class Favorites extends Component {

 

  render() {  
    let beys = beyArray//.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />)//appClickHandler = {this.props.appClickHandler}/>)
    //beys.this.props.favorite === true ? {beys} : null
    console.dir(beys[1].favorite)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
         <h3><BeyCard {beys.favorite === true ? {beys} : null} /></h3> 
      </div>
    );
  }
}

export default Favorites

