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

  favClickHandler=(beyObj)=>{

    let result = this.state.data.filter(foundResult => foundResult.id === beyObj);
    result[0].favorite = !result[0].favorite
    let newCount = result[0].num_of_clicks = result[0].num_of_clicks +1
    this.setState({num_of_clicks: newCount}, console.log(result[0]))

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
