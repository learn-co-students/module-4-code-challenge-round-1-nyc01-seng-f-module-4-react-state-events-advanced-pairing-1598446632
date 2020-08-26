import React from "react";
import BeyContainer from './Containers/BeyContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import "./App.css";

class App extends React.Component {

  state = {
    bey: {}
  }

  clickHandler = (beyObj) => {
    let beyFavBool;
    if (beyObj.favorite === false) {
      beyFavBool = beyObj.favorite = true
    }
    console.log("I'm in the App")
    this.setState({ bey: beyFavBool }, () => console.log(this.state.bey))
  }

  render() {
    console.log("Rendering Action in App")

    let clicked = this.clickHandler;
    // { (this.props.appState.favorite === true) ? <BeyCard bey={this.props.appState} /> : null }

    return (
      <div className="container">
        <BeyContainer clicked={clicked} />
        <FavoritesContainer appState={this.state.bey}/>
      </div>
    );
  }
};

export default App;
