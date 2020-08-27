import React from "react";
import { beyArray } from "./api.js"
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {

  generateBeyCards = () => {
    return (
        beyArray.map(item => <BeyCard
            key = {item.id}
            beyItems = {item}
            favClickHandler = {this.props.favClick}/>)
    )
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.generateBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
