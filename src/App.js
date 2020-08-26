import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites'
import beyArray from './api.js'

class App extends React.Component {
  state = {
    beyonces: beyArray,
    filteredBeyonces: []
  }

  reverseBey = (beyObject) => {
    const targetBeyonce = this.state.beyonces.find(beyonce => beyonce.id === beyObject.id)
    targetBeyonce.favorite = true
    this.setState({
      filteredBeyonces: this.state.beyonces.filter(beyonce => beyonce.favorite)
    }, () => console.log(targetBeyonce, this.state)) 
  }

  favoriteReverseBey = (beyObject) => {
    const targetBeyonce = this.state.beyonces.find(beyonce => beyonce.id === beyObject.id)
    targetBeyonce.favorite = false
    this.setState({
      filteredBeyonces: this.state.beyonces.filter(beyonce => beyonce.favorite)
    }, () => console.log(targetBeyonce, this.state)) 
  }


  render(){
    return (
      <div className="container">
        <BeyContainer beyonces={this.state.beyonces} reverseBey={this.reverseBey}/>
        <Favorites bey={this.state.filteredBeyonces} favoriteReverseBey={this.favoriteReverseBey}/>
      </div>
    );
  }
  
};

export default App;
