import React from "react";
import "./App.css";
import beyArray from './api.js'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends React.Component {

  appClickHandler1 = (bey) => {
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).favorite = true
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).num_of_clicks += 1
    this.state.beys.sort((beyA,beyB) => {
      return(beyB.num_of_clicks - beyA.num_of_clicks) 
      }
    )

    this.setState({beys: this.state.beys})
  }

  appClickHandler2 = (bey) => {
    this.state.beys.find(beyObj=> beyObj.id===bey.bey.id).favorite = false
    this.state.beys.sort((beyA,beyB) => {
      return(beyB.num_of_clicks - beyA.num_of_clicks) 
      }
    )
    this.setState({beys: this.state.beys})
  }

  createBey = ({name,img}) => {
    const beyObj = {
      "id": this.state.beys.length + 1,
      "name": `${name}`,
      "img": `${img}`,
      "favorite": false,
      "num_of_clicks": 0
    }
    this.setState({beys: [...this.state.beys,beyObj]})
  }

  searchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  filteredBeys = () => {
    return (
      this.state.beys.filter(bey => bey.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    )
  }

  state = {
            beys: beyArray,
            searchTerm: ""
          }

  render() {
    return (
      <div className="container">
        <BeyContainer appClickHandler={this.appClickHandler1} beys={this.filteredBeys()} 
          createBey={this.createBey} searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/>
        <Favorites appClickHandler={this.appClickHandler2} beys={this.filteredBeys()}/>
      </div>
    )
  }
}

export default App;
