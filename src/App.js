import React from "react";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends React.Component {
  
state = {name: "",
         img: ""
        }

  appClickHandler = (beyObj) =>{
    console.log("appClickHandler", beyObj.name)
    this.setState( {name: beyObj.name, img: beyObj.img},
      () => console.log(this.state))
  }
  
  render() {
  return (
    <div className="container">
      <BeyContainer appClickHandler={this.appClickHandler} />
      <Favorites name={this.state.name} img={this.state.img}/>
    </div>
  )}
};

export default App;
