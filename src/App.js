import React from "react";
import "./App.css";
import beyArray from './api.js'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends React.Component {

  appClickHandler1 = (bey) => {
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).favorite = true
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).num_of_clicks += 1
    this.setState({beys: this.state.beys})
  }

  appClickHandler2 = (bey) => {
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).favorite = false
    this.setState({beys: this.state.beys})
  }

  state = {beys: beyArray}

  render() {
    return (
      <div className="container">
        <BeyContainer appClickHandler={this.appClickHandler1} beys={this.state.beys}/>
        <Favorites appClickHandler={this.appClickHandler2} beys={this.state.beys}/>
      </div>
    )
  }
}

export default App;
