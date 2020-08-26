import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api'


class App extends React.Component {
  
  state = {
    updatedBeyArray : beyArray
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

  render(){
    
    return (
      <div className="container">
        <BeyContainer apiData={this.state.updatedBeyArray} appClickHandler={this.appClickHandler} />
        <Favorites beyObjects={this.beyFavFilter()} favoriteClickHandler={this.favoriteClickHandler}/>
      </div>
    );
  }
};

export default App;
