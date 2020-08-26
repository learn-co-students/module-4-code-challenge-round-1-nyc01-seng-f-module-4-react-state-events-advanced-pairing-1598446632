import React from "react";
import beyArray from './api'
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  
  
  render() {
    
    let fetchBey = beyArray.map((bey)=><BeyCard bey={bey} appClickHandler={this.props.appClickHandler}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        {fetchBey}
      </div>
    );
  }
}

export default BeyContainer;
