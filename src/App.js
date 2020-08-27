import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
import beyArray from "./api"
import Form from './form'

//need to hold state in the lowest common parent - that's where we pull in API

class App extends React.Component {
  
  state = {beyArray: beyArray}
  //our default state will be our original API


containerClickHandler = (id) => {
    // console.log("this.state", this.state)  
    let newArray =[...this.state.beyArray] //create a variable that holds the whole array of objects
    let foundObj = newArray.find((beyObj) => beyObj.id === id) //MAKE COPY OF STATE in a variable, find the object in the array that has the id that matches the one clicked on
    foundObj.favorite = true //find the favorite key in the object and flip its value
    // foundObj.favorite != foundObj.favorite //more dynamic but does not fit deliverables as well
    this.setState({beyArray: newArray})  //update state to the modified array - greenlights re-render
  }

  filteredBey =() => { //helper method to filter in objects that were favorited true
    return this.state.beyArray.filter((beyObj) => beyObj.favorite) //go through our state array and filter everything favorite = true.  doesn't need ===true based on .filter function
  }
//add it below

//created callback function to pass into beycard to recognize click 
//test with console log - then add click handler to app render, beycontainer as a prop,  and then update the click event on the card.
//update click handler to go to the array (api) edit the object that was clicked on (update key) and pass to favorites
  //what object was clicked on
  //how do we update array
  //app needs to rerender


  favoriteClickHandler = (id) => {
    // console.log("this.state", this.state)  
    let newArray =[...this.state.beyArray] //create a variable that holds the whole array of objects
    let foundObj = newArray.find((beyObj) => beyObj.id === id) //MAKE COPY OF STATE in a variable, find the object in the array that has the id that matches the one clicked on
    foundObj.favorite = false //find the favorite key in the object and flip its value
    // foundObj.favorite != foundObj.favorite //more dynamic but does not fit deliverables as well
    this.setState({beyArray: newArray}, () => window.alert("I got a hot sauce in my bag, swag"))  //update state to the modified array - greenlights re-render
  }

  render() { 
  return (
    <div className="container">
      <BeyContainer array={beyArray} clickHandler={this.containerClickHandler} />
      <Favorites array={this.filteredBey()} clickHandler={this.favoriteClickHandler}/>
    </div>
  )}
};

//added array props that passes through the beyArray defined in API
//set up clickhandler prop and passed through new callback function




export default App;