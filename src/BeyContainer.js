import React from "react";
import BeyCard from './BeyCard'
import beyArray from './api.js'

class BeyContainer extends React.Component {
  
  returnBeyArray = () => {
    return beyArray.map(beyObject => <BeyCard key={beyObject.id} bey={beyObject} reverseBey={this.props.reverseBey}/>)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.returnBeyArray()}
      </div>
    );
  }
}

export default BeyContainer;
