import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites.js'

class App extends React.Component {

  state = {bey: [] }

  appClickHandler = (bacon) => {
    bacon.favorite = true
    this.setState({bey: bacon})
  }

  render(){
    return (
      <div className="container">
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites bey={this.state.bey}/>
      </div>
    );
  };
}


export default App;
