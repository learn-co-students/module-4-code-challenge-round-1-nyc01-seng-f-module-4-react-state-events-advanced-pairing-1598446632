import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer.js"
import Favorites from "./Components/Favorites.js"
import api from './api.js'

class App extends React.Component {


  state = {
    data: api,
    num_of_clicks: 0   
  }

  favClickHandler=(beyObjId)=>{

    let result = this.state.data.find(foundResult => foundResult.id === beyObjId);
    // console.log(result);
    result.favorite = !result.favorite
    let newCount = result.num_of_clicks += 1
    // return newCount
    // this.setState({data: newCount},)
    console.log(newCount)

  }


  render() {
    let favArr = this.state.data.filter(blah => blah.favorite === true )
    
  return (
    <div className="container">
      <BeyContainer favClickHandler={this.favClickHandler} beyArr={this.state.data} />
      <Favorites beyArr={favArr}/>
    </div>
  );
};

}

export default App;
