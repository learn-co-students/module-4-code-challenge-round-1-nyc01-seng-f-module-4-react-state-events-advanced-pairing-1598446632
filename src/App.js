import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites'

class App extends React.Component {
  state = {
    beyonces: [],
  }

  reverseBey = (beyObject) => {
    beyObject.favorite = !beyObject.favorite
    if (!beyObject.favorite) {alert("I got a hot sauce in my bag, swag")}
    let beyoncesArray = this.state.beyonces
    beyoncesArray.push(beyObject)
    this.setState({
      beyonces: beyoncesArray.filter(beyObject => beyObject.favorite) 
    }, () => console.log(`state: `, this.state.beyonces))
    
  }

  render(){
    return (
      <div className="container">
        <BeyContainer reverseBey={this.reverseBey}/>
        <Favorites bey={this.state.beyonces}/>
      </div>
    );
  }
  
};

export default App;
