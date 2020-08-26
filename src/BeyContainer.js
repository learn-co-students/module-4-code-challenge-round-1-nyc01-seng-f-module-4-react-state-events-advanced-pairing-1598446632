import React from "react";
import beyArray from './api.js'
import BeyCard from './BeyCard.js'

class BeyContainer extends React.Component {

  render() {
    
    let beys = beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClickHandler={this.props.appClickHandler}/>)

    return (
      <div className="index">
        <h1>Index</h1>
        {beys}
      </div>
    );
  }
}

export default BeyContainer;
