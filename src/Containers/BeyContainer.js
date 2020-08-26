import React from "react";
import BeyCard from '../Components/BeyCard';
import beyArray from '../api';

class BeyContainer extends React.Component {

  renderBeyCards = () => beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClick={this.props.clicked} />)

  render() {
    console.log("Rendering Action in BeyContainer")
    return (
      <div className="index">
        <h1>Index</h1>
          {this.renderBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
