import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api'
import Form from './Components/Form'

class App extends React.Component {
  
  state = {
    updatedBeyArray : beyArray,
    filteredArray: beyArray,
    searchValue: ""
  }
  
  //NOTE: last steps would be filtering the updatedBeyArray by objects who's favorites key is true and passing those into favorites to then map through and render beyCards
  


  appClickHandler = (beyObj) => {
    let beyArrayCopy = [...this.state.updatedBeyArray]
    
    let passedUpObj = beyArrayCopy.find(obj => obj.id === beyObj.id)
    passedUpObj.favorite = !passedUpObj.favorite
    //make this just equal to true if we have issues later

    this.setState({updatedBeyArray: beyArrayCopy})
    
  }

  beyFavFilter = () => {
    return this.state.updatedBeyArray.filter(beyObj => beyObj.favorite === true)
  }

  favoriteClickHandler = (beyObj) => {
    let beyArrayCopy = [...this.state.updatedBeyArray]
    
    let passedUpObj = beyArrayCopy.find(obj => obj.id === beyObj.id)
    passedUpObj.favorite = !passedUpObj.favorite
    //make this just equal to true if we have issues later

    this.setState({updatedBeyArray: beyArrayCopy})
  }


  submitHandler = (e) => {
    e.preventDefault()
    let newBeyArray = [...this.state.updatedBeyArray, {name: e.target.name.value, img: e.target.img.value, favorite: false}]
    //console.log(newBeyArray)
    
    this.setState({updatedBeyArray: newBeyArray})
    
    // console.log(e.target.name.value)
    // console.log(e.target.img.value)
  }


  searchHelper = (e) => {
    console.log("in app:", e.target.value)
    this.setState({searchValue: e.target.value})
  }

  searchFilteredBeys = () => {
    return this.state.updatedBeyArray.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }


  render(){
    
    return (
      <div className="container">
        <Form submitHandler={this.submitHandler}/>
        
        <BeyContainer apiData={this.searchFilteredBeys} appClickHandler={this.appClickHandler} searchHelper={this.searchHelper} searchValue={this.state.searchValue} />
        <Favorites beyObjects={this.beyFavFilter()} favoriteClickHandler={this.favoriteClickHandler}/>
      </div>
    );
  }
};

export default App;
