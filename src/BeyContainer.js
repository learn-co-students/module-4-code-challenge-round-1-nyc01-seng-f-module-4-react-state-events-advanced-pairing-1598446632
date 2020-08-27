import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  filterBeys = () => {
    return this.props.array.filter((beyObj) => beyObj.name.toLowerCase().includes(this.props.userInput.toLowerCase()))
  }
 
  render() {
    
    let beys = this.filterBeys().map((card) => <BeyCard key={card.id} bey={card} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="index">
        <h1>Index</h1>
        <input type="text"  name = "userInput"
               value={this.props.userInput}
               placeholder = "Search for name"
               onChange = {event => this.props.changeHandler(event)} > 
        </input>
        {beys}
      </div>
    )
    
  }
}

export default BeyContainer;
