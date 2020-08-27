import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer.js"
import Favorites from "./Components/Favorites.js"
import api from './api.js'
import Form from './Components/form';

class App extends React.Component {


  state = {
    beyArr: api
  }

  contClickHandler=(beyObjId)=>{
    let newArr = [...this.state.beyArr]
    let foundResult = newArr.find((beyObj) => beyObj.id === beyObjId)
    foundResult.favorite = true
    foundResult.num_of_clicks = foundResult.num_of_clicks +1

    this.setState({ beyArr: newArr })
  }


  favClickHandler=(beyObjId)=>{
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find((beyObj) => beyObj.id === beyObjId)
    foundObj.favorite = false

    this.setState({ beyArr: newArray })
  }

  filteredBeys = () => {
    return this.state.beyArr.filter((beyObj) => beyObj.favorite)
  }

  sortedBeys = () => {
    return this.state.beyArr.sort((beyObjA, beyObjB) => beyObjB.num_of_clicks - beyObjA.num_of_clicks)
  }


  handleFormData = ({ name, img }) => {
    let newBeyArr = [...this.state.beyArr, {favorite: false, id:50, name, img, num_of_clicks: 0}]
    this.setState( { beyArr: newBeyArr } )
  }




  render() {
    return (
    <>
    <div className="container">
      <BeyContainer clickHandler={this.contClickHandler} arr={this.sortedBeys()} />
      <Favorites clickHandler={this.favClickHandler} arr={this.filteredBeys()} />
    </div>

    <div className="form">
        <Form handleFormData={this.handleFormData} />
    </div>
    </>
  );
};

}

export default App;
