import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    //set to variable, iterate over the new array passed down from parent in filter bey method.  create same props as in parent.
    let beys = this.props.array.map((beyObj) => <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <p>{beys}</p>
      </div>
    ); //pass in beys variable (array of bey with favorite true)
  }
}