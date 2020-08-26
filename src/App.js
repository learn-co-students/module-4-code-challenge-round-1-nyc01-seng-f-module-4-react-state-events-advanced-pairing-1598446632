import React from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites' 

class App extends React.Component {

  state={ bey:[] }
  appClickHandler=(bey_object)=>{
    // console.log("App listenes", bey_object)
    if (bey_object.favorite === false){
      bey_object.favorite=true

      let newStateArray = this.state.bey.slice();
      newStateArray.push(bey_object);
      this.setState({bey: newStateArray})

    }else{
      bey_object.favorite=false
      let newStateArray = this.state.bey.slice();
      newStateArray.remove(bey_object);
      this.setState({bey: newStateArray})



    } 
  }
  render(){

    return (
      <div className="container">
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites bey={this.state.bey}/>
      </div>
    );
  }
};

export default App;
