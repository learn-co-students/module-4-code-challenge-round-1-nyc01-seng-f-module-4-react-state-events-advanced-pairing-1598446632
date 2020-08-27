import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {

 


  render() {
  
    let beyArr = this.props.arr.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} contClickHandler={this.props.clickHandler} />);
    
    return (
      <div className="index">
        <h1>BeyContainer Index</h1>
        {beyArr}
      </div>
    );
  }
}

export default BeyContainer;
