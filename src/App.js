import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites'
import beyArray from "./api";

class App extends React.Component {
  appClickHandler = (bey) =>{
    console.log(this.state.find(beyObj=> beyObj.id===bey.bey.id).favorite)
    this.state.find(beyObj=> beyObj.id===bey.bey.id).favorite=!this.state.find(beyObj=> beyObj.id===bey.bey.id).favorite
    this.setState(this.state)
  }

  state = beyArray
  
  render(){
  return (
    <div className="container">
      <BeyContainer appClickHandler={this.appClickHandler} beyArray={this.state}/>
      <Favorites appClickHandler={this.appClickHandler} beyArray={this.state}/> 
    </div>
  );
  }
};

export default App;
