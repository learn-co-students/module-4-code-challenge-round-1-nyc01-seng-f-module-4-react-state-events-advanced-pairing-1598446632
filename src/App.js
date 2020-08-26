import React from "react";
import BeyContainer from './Containers/BeyContainer'
import FavoritesContainer from './Containers/FavoritesContainer'
import "./App.css";

class App extends React.Component {

  state = {
    bey: []
  }

  clickHandler = (beyObj) => {
    // let beyFavBool;
    console.log(beyObj.favorite)
    if (beyObj.favorite === false) {
      beyObj.favorite = true
    }
    console.log("I'm in the App")
    let newArr = [...this.state.bey, beyObj]
    // cleanNewArr if we cleaned up newArr to keep single source of truth before passing to favContainer, we should be good
    this.setState({ bey: newArr}, () => console.log("async click", this.state.bey))
  }

  render() {
    console.log("Rendering Action in App", this.state.bey)

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
