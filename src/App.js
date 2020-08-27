import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites' 
import beyArray from './api'

class App extends React.Component {

  state={ 
    bey: beyArray,
    filteredBey: beyArray,
    searchValue: ""
  }

  appClickHandler=(bey_object)=>{

    let newArray = [...beyArray]
    let filteredObj = newArray.find((obj)=> obj.id === bey_object.id )
    filteredObj.favorite = true
    console.log(filteredObj)
    this.setState({bey:newArray}) 
    } 
  
    favoriteContainer=(bey_object)=>{

      let newArray = [...beyArray]
      let filteredObj = newArray.find((obj)=> obj.id === bey_object.id )
      filteredObj.favorite = false
      console.log(filteredObj)
      this.setState({bey:newArray}) 
    }

    submitHandler=(obj)=>{
    
      let newArray=[...beyArray, obj]
      console.log(newArray)
      this.setState( {bey:newArray} , ()=>{console.log("new state:", this.state.beyArray)})
    }

    searchHandler=(e)=>{
      console.log(e.target.value)

      this.setState({searchValue:e.target.value})
    }
    
    filteredBeys=()=>{
      return this.state.filteredBey.filter((bey)=>bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    render(){
    let  favArray = this.state.bey.filter((bey)=> bey.favorite)
    let filteredBey = this.filteredBeys()

    return (
      <div className="container">
        <BeyContainer 
        appClickHandler={this.appClickHandler} 
        submitHandler={this.submitHandler} 
        beyArray={filteredBey}
        searchHandler={this.searchHandler}
        />
        <Favorites bey={favArray} favoriteContainer={this.favoriteContainer}/>
      </div>
    );
  }
};

export default App;
