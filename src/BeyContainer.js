import React from "react";
import beyArray from "./api"
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  
  makeBey = () => {
    return beyArray.map((bey) => <BeyCard key={bey.id} beyInfo={bey} appClickHandler={this.props.appClickHandler}/>)
  }
  
  // orderBeys = () => {
  //   return this.props.beys.map((bey) => <BeyCard key={bey.id} beyInfo={bey} appClickHandler={this.props.appClickHandler}/>)
  // }
  
  render() {
    
    return (
      <div className="index">
        <h1>Index</h1>
        {this.makeBey()}
      </div>
    );
  }
}

export default BeyContainer;
