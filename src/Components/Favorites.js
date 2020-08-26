import React, { Component } from "react";
import BeyCard from './BeyCard.js'

export default class Favorites extends Component {



  render() {
    let bey = this.props.beyArr
    let beyArr = bey.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />);
    

    // bey.sort((bey[0].num_of_clicks, bey[1].num_of_clicks) => {
    //   return Arr[0].num_of_clicks - sortedArr[1].num_of_clicks;
    // })

    console.log(beyArr[0])

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beyArr}
      </div>
    );
  }
}