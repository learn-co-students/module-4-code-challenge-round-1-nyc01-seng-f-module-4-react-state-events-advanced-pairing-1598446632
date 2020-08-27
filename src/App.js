import React from "react";
import "./App.css";
import beyArray from "./api"
import BeyContainer from "./Containers/BeyContainer"
import FavoritesContainer from "./Containers/FavoritesContainer"
import NewBeyContainer from "./Containers/NewBeyContainer"
import Search from "./Components/Search"
class App extends React.Component {

  state = { 
    favoriteBeys : [],
    beyArray: beyArray,
    searchValue: ""
  }

  selectBeys =  (beyObj) => {
      beyObj.favorite = !beyObj.favorite
      !this.state.favoriteBeys.includes(beyObj) ? 
      this.setState({favoriteBeys: [...this.state.favoriteBeys, beyObj]}) : window.alert("I got a hot sauce in my bag, swag")
  }

  deSelectBeys = (beyObj) => {
      beyObj.favorite = !beyObj.favorite
      let filteredArray = this.state.favoriteBeys.filter((bey) => bey.id !== beyObj.id)
      this.setState({
        favoriteBeys: filteredArray
      })
  }

  sortingBeys = (beyObj) => {
    beyObj.num_of_clicks += 1
    let filteredArray = this.state.beyArray.filter(bey => bey.id !== beyObj.id)
    filteredArray.push(beyObj)
    this.setState({beyArray: filteredArray.sort(function(a,b){return b.num_of_clicks - a.num_of_clicks})})
  }
  
  addNewBeys = (name, img) => {
      const beyObj = {
        "id": this.state.beyArray.length + 1,
        "name": `${name}`,
        "img": `${img}`,
        "favorite": false,
        "num_of_clicks": 0
      }

      this.setState({beyArray: [...this.state.beyArray, beyObj]})
  }
  
  filteredBeys = () => {
    return this.state.beyArray.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  filteredFavBeys = () => {
    return this.state.favoriteBeys.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  searchHandler = (e) => {
    console.log(e.target.value)
    this.setState({searchValue: e.target.value})
  }

  render(){
    return (
      <div className="container">
        <div id="forms">
          <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
          <NewBeyContainer addNewBeys={this.addNewBeys} />
        </div>
        <BeyContainer selectBeys={this.selectBeys} sortingBeys={this.sortingBeys} beyArray={this.filteredBeys()} />
        <FavoritesContainer favBeys={this.filteredFavBeys()} deSelectBeys={this.deSelectBeys} />
      </div>
    );
  }  
};

export default App;
