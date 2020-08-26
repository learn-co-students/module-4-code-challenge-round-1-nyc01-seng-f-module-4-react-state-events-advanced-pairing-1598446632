import React from "react";
import "./App.css";
import beyArray from "./api"
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"


class App extends React.Component {

  state = { 
    favoriteBeys : [],
    beyArray: beyArray 
  }

  selectBeys =  (beyObj) => {
      beyObj.favorite = !beyObj.favorite
      this.setState({favoriteBeys: [...this.state.favoriteBeys, beyObj]})
  }

  deSelectBeys = (beyObj) => {
      beyObj.favorite = !beyObj.favorite
      let filteredArray = this.state.favoriteBeys.filter((bey) => bey.id !== beyObj.id)
      this.setState({
        favoriteBeys: filteredArray,
        beyArray: filteredArray.concat(beyObj)
      })
  }

  render(){
    return (
      <div className="container">
        <BeyContainer selectBeys={this.selectBeys} beyArray={this.state.beyArray}/>
        <Favorites favBeys={this.state.favoriteBeys} deSelectBeys={this.deSelectBeys}/>
      </div>
    );
  }  
};

export default App;
