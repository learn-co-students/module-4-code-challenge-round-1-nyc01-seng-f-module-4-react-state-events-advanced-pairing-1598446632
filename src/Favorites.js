import React, { Component } from "react";
import BeyCard from './BeyCard.js'
//import beyArray from './api.js'


class Favorites extends Component {

  renderBeys = () => {
    return this.props.bey.map(beyonceObj => <BeyCard key={beyonceObj.id} bey={beyonceObj}/>)
  }

  render() {  
    // let beys = beyArray//.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />)//appClickHandler = {this.props.appClickHandler}/>)
    // //beys.this.props.favorite === true ? {beys} : null
    // console.dir(beys[1].favorite)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
         {this.renderBeys()}
      </div>
    );
  }
}

export default Favorites

