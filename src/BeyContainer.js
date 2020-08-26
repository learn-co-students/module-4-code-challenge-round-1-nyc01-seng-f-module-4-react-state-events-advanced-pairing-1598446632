import React from "react";
import beyArray from './api'
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {
  
  beyCards = () => {return(this.props.beyArray.map(bey => {
    return (<BeyCard appClickHandler={this.props.appClickHandler} bey={bey}/>)}))}

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyCards()}
      </div>
    );
  }
}

export default BeyContainer;
