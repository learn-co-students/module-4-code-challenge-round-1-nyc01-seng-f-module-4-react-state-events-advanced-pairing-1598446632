import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites.js'

class App extends React.Component {

  state = {bey: [] }

  appClickHandler = (bacon) => {
    //console.log(bacon.favorite)
    bacon.favorite = !bacon.favorite
    let beyArray = this.state.bey
    beyArray.push(bacon)
    if(!bacon.favorite){ window.alert("Hot sauce in my bag, swag")}

   
    this.setState({
      bey: beyArray.filter(bacon => bacon.favorite)})
    }
 

  render() {
    return (
      <div className="container">
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites bey={this.state.bey} appClickHandler={this.appClickHandler}/>
      </div>
    );
  }
}



export default App;
