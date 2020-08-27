import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './Containers/BeyContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import Form from './Components/Form'
class App extends React.Component {

  state = {
    beyArray: beyArray
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

  submitHandler = (beyObj) => {
    
    let newArray = [...this.state.beyArray, beyObj]
 
    this.setState({beyArray: newArray})
  }

  

  render() {

    return (
      <div className="container">
        <Form submitHandler={this.submitHandler}/>
        <BeyContainer array={this.sortedBeys()} clickHandler={this.containerClickHandler} />
        <FavoritesContainer array={this.filteredBeys()} clickHandler={this.favoriteClickHandler} />
      </div>
    );
  }
};

export default App;