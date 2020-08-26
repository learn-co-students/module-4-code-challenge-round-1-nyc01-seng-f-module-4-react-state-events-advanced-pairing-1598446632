import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  createBeyCards = () => {
    return (this.props.beys.map(bey => {
        return(<BeyCard key={bey.id} appClickHandler={this.props.appClickHandler} bey={bey}/>)
      } 
    ))

  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.createBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
