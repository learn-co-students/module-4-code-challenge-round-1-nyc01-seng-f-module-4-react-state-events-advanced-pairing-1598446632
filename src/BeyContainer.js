import React from "react";
import beyArray from "./api"
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  
  state = { sortedBeyArray: beyArray.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})}

  beys = () => {
    return this.state.sortedBeyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} sortingBeys={this.sortingBeys} selectBeys={this.props.selectBeys}/>)
  }

  sortingBeys=(beyObj) => {
    let filteredArray = this.state.sortedBeyArray.filter((bey)=>bey.id !== beyObj.id)
    filteredArray.push(beyObj)
    this.setState({sortedBeyArray: filteredArray.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})})
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
