import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
 
  render() {
    let beys = this.props.array.map((card) => <BeyCard key={card.id} bey={card} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="index">
        <h1>Index</h1>
        <input type="text"  onKeyUp={event => this.props.searchHandler(event)} placeholder="Search for names.." ></input>
        {beys}
      </div>
    );
  }
}

export default BeyContainer;
