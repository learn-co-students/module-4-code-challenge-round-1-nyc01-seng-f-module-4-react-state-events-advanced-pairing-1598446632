import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites'

class App extends React.Component {
  state = {
    beyonces: []
  }

  reverseBey = (beyObject) => {
    
    
    beyObject.favorite = !beyObject.favorite
    let beyoncesArray = this.state.beyonces
    beyoncesArray.push(beyObject)
    if(!beyObject.favorite){ window.alert("Hot sauce in my bag, swag")}
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
