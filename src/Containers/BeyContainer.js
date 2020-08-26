import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {

 


  render() {
  
    let beyArr = this.props.beyArr.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} favClickHandler={this.props.favClickHandler} />);
    
    return (
      <div className="index">
        <h1>BeyContainer Index</h1>
        {beyArr}
      </div>
    );
  }
}

export default BeyContainer;
