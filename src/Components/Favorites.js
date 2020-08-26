import React, { Component } from "react";
import BeyCard from './BeyCard.js'

export default class Favorites extends Component {



  render() {
    let beyArr = this.props.beyArr.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />);
    // this.props.beyArr.sort(function(this.props.beyArr[0].num_of_clicks, this.props.beyArr[1].num_of_clicks) {
    //   return this.props.beyArr.num_of_clicks - this.props.beyArr[1].num_of_clicks;
    // })
    console.log(this.props.beyArr)

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beyArr}
      </div>
    );
  }
}