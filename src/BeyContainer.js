import React from "react";

import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  


  beys = () => {
    return this.props.sortBeys.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} selectBeys={this.props.selectBeys}/>)
  }

 

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        { this.beys() }
      </div>
    );
  }

}

export default BeyContainer;
