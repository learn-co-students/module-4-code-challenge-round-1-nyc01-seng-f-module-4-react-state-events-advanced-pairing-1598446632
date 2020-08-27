import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import beyArray from "./api";
import Favorites from "./Favorites";
import Form from "./Form";

class App extends React.Component{

state = {
  beyArray: beyArray,
  gifName: "gif name",
  gifUrl: "gif url",
  userInput: "Search for name"
}

containerClickHandler = (id) =>{
let newArray = [...this.state.beyArray]
let foundObj = newArray.find((beyObj) => beyObj.id === id)
foundObj.favorite = !foundObj.favorite
this.setState({beyArray: newArray})
}

changeHandler = event =>{this.setState({
       [event.target.name]:event.target.value
      })}

submitHandler = event => {
        event.preventDefault()      
        let formData = { name: this.state.gifName, img: this.state.gifUrl, favorite: false, num_of_clicks: 0 , id: null}        
        let dataArray = [...this.state.beyArray, formData]     
        this.setState({beyArray: dataArray})      
      }  
      
searchHandler = event => {
        event.preventDefault()
        let input = event.target.value.toUpperCase() 
        console.log(input)
        // next steps:
        // need to set new state "matchesSearch" 
        // create filter function which: 
              // copy beyArray
              // change false to true for those beyObj.name that matches input
              // update state beyArray => beyContainer will only render cards that matches search input
      


}

filteredBeys = () => {
  return this.state.beyArray.filter((beyObj) => beyObj.favorite===true)
}

  render() {
  return ( 
    <div className="container">
      <Form formData = {this.state} changeHandler = {this.changeHandler} submitHandler = {this.submitHandler}/>
      <BeyContainer array = {this.state.beyArray} 
                    clickHandler={this.containerClickHandler} 
                    searchHandler = {this.searchHandler}
                    userInput = {this.state.userInput}
                    changeHandler = {this.changeHandler}/>
      <Favorites array = {this.filteredBeys()} clickHandler={this.containerClickHandler}/>
    </div>
  );
}
}

export default App;
