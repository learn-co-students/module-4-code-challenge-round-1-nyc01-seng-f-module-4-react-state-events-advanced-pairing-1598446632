import React from "react";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
// import beyArray from "./api"
import "./App.css";

class App extends React.Component {
  
  state = {
    favorites: [],
    // beys: beyArray
  }

  appClickHandler = (beyObj) => {
    beyObj.num_of_clicks += 1
    // this.setState({beys: this.state.beys.concat(beyObj)})
    // console.log(this.state.beys)
    beyObj.favorite = !beyObj.favorite
    if (beyObj.favorite === true){
      this.setState({
        favorites: this.state.favorites.concat(beyObj)
      })} else {
        
        
        let array = this.state.favorites.filter(bey => {
            return bey !== beyObj
          });
          this.setState({
              favorites: array
            }, () => alert("I got a hot sauce in my bag, swag"))
            
            // this.setState({favorites: this.state.favorites.beyObj = undefined})
          }
         
          
    
  }
  
  
  render() {
    return (
      <div className="container">
  
        <BeyContainer appClickHandler={this.appClickHandler} />
        <Favorites kablamo={this.state.favorites} appClickHandler={this.appClickHandler} />
      </div>
    );
  }
  
};

export default App;


// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// console.log(keysSorted);     // bar,me,you,foo

