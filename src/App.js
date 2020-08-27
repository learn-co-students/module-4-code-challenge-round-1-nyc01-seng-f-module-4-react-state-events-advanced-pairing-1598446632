import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import AddGifForm from './AddGifForm'


class App extends React.Component {

  state = {
    beyArray: beyArray,
    searchitem: ""
  }

  containerClickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = true
    foundObj.num_of_clicks = foundObj.num_of_clicks + 1
    this.setState({ beyArray: newArray })
  }

  favoriteClickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === id)
    foundObj.favorite = false
    this.setState({ beyArray: newArray }, () => window.alert("I got a hot sauce in my bag, swag"))

  }

  filteredBeys = () => {
    return this.state.beyArray.filter((beyObj) => beyObj.favorite)
  }

  sortedBeys = () => {
 
    return this.state.beyArray.sort((beyObjA, beyObjB) => beyObjB.num_of_clicks - beyObjA.num_of_clicks)
    
  }

  addGifToIndex = (formContents) => {
    let newGifObj = {
      "name": formContents.gifname,
      "img": formContents.gifurl,
      "favorite": false,
      "num_of_clicks": 0
    }
    
    this.setState({beyArray: [...this.state.beyArray, newGifObj] })
  }

  onChangeSearchFilter = (event) => {
      this.setState({searchitem: event.target.value})
  }

  searchFilterBeys = () => {
      if(this.state.searchitem.length > 0){
       let lowercaseSearchItem = this.state.searchitem.toLowerCase()
       return this.state.beyArray.filter(bey => bey.name.toLowerCase().includes(lowercaseSearchItem))
      } 
      return []
  }

  render() {

    const filtered = this.searchFilterBeys();
    return (
      <div className="form">
       <h1>
          <u>Add a Gif here</u>
          <AddGifForm addGif={this.addGifToIndex} />
        </h1>
      <div className="Filter">
        Filter results here:
        <input
          type="text"
          name="searchitem"
          placeholder="Filter Criteria"
          value={this.state.searchname}
          onChange={event => this.onChangeSearchFilter(event)}
        />
      </div>
      <div className="container">
        <BeyContainer filtered={filtered} array={this.sortedBeys()} clickHandler={this.containerClickHandler} />
        <Favorites  filtered={filtered} array={this.filteredBeys()} clickHandler={this.favoriteClickHandler} />
      </div>
      </div>
    );
  }
};

export default App;
