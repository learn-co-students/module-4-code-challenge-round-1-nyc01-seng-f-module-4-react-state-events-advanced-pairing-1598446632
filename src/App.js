import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"
import beyArray from "./api"
import Form from "./Form"


class App extends React.Component {

  state = { 
  sortedBeyArray: beyArray.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks}),
  favoriteBeys: []


}


  selectBeys =  (beyObj) => {
    // console.log(beyObj)
    // if (beyObj.favorite === true){
    //   let newArray = this.state.favoriteBeys.concat(beyObj)
    //   this.setState({favoriteBeys: newArray})
    // } else{ 
      beyObj.num_of_clicks += 1

      let filteredArray = this.state.favoriteBeys.filter((bey)=>bey.id !==beyObj.id)
      let sortedArray =  this.state.sortedBeyArray.filter((bey)=>bey.id !==beyObj.id)
      let newFavoriteBeys = filteredArray.concat(beyObj),
      newSortedBeys = sortedArray.concat(beyObj);
      newFavoriteBeys.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})
      newSortedBeys.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})
      this.setState({favoriteBeys: newFavoriteBeys,
        sortedBeyArray: newSortedBeys
      })


      
      
    }
        removeBeys = (beyObj) =>{
          beyObj.favorite = false
          let filteredArray = this.state.favoriteBeys.filter((bey)=>bey.id !==beyObj.id),
          sortedArray =  this.state.sortedBeyArray.filter((bey)=>bey.id !==beyObj.id),
          newSortedBeys = sortedArray.concat(beyObj);
          newSortedBeys.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})
          alert("hot sauce in my bag, swag!")
          this.setState({sortedBeyArray: newSortedBeys,
            favoriteBeys: filteredArray
          })
        }

          newBey = (beyObj) =>{
            let newBeyArray = this.state.sortedBeyArray;
            newBeyArray.push(beyObj);
            newBeyArray.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})
            this.setState({
              ...this.state,
              sortedBeyArray: newBeyArray
            })



          }


  render(){
    return (
      <div className="container">
        <Form add={this.newBey}/>
        <BeyContainer sortBeys = {this.state.sortedBeyArray} selectBeys={this.selectBeys}/>
        <Favorites favBeys={this.state.favoriteBeys} selectBeys={this.removeBeys}/>
      </div>
    );
  }  
};

export default App;
