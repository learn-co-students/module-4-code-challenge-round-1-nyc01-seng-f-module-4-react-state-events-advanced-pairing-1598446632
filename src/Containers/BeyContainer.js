import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {

  beys = () => {
    return this.props.beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} sortingBeys={this.props.sortingBeys} selectBeys={this.props.selectBeys} containerIndex={true} />)
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
