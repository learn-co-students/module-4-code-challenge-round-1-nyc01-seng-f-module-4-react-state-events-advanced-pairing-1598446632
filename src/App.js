import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"


class App extends React.Component {

  state = { favoriteBeys : [] }

  selectBeys =  (beyObj) => {
    console.log(beyObj)
    if (beyObj.favorite === true){
      let newArray = this.state.favoriteBeys.concat(beyObj)
      this.setState({favoriteBeys: newArray})
    } else{ 
      let filteredArray = this.state.favoriteBeys.filter((bey)=>bey.favorite === false)
      this.setState({favoriteBeys: filteredArray})
    }
  }

  render(){
    return (
      <div className="container">
        <BeyContainer selectBeys={this.selectBeys}/>
        <Favorites favBeys={this.state.favoriteBeys}/>
      </div>
    );
  }  
};

export default App;
