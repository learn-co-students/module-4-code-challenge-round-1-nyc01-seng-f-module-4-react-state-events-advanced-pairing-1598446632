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

    this.setState({updatedBeyArray: beyArrayCopy})

    //this.setState({updatedBeyArray: })
    //this.setState({beyObj: beyObj})
  }



  render(){
    
    return (
      <div className="container">
        <BeyContainer apiData={this.state.updatedBeyArray} appClickHandler={this.appClickHandler} />
        <Favorites beyObjects={}/>
      </div>
    );
  }
};

export default App;
