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
    let filteredObj = newArray.find((obj)=> obj.name === bey_object.name )
    filteredObj.favorite = true
    console.log(filteredObj)
    this.setState({bey:newArray}) 
    } 
  
    favoriteContainer=(bey_object)=>{

      let newArray = [...beyArray]
      let filteredObj = newArray.find((obj)=> obj.id === bey_object.id )
      filteredObj.favorite = false
      this.setState({bey:newArray}) 
    }

    submitHandler=(obj)=>{
      console.log(obj)
      this.setState( {bey:[...this.state.bey, obj]} , ()=>{console.log("new state:", this.state.bey)})
    }

    searchHandler=(e)=>{
      console.log(e.target.value)

      this.setState({searchValue:e.target.value})
    }
    
    filteredBeys=()=>{
      return this.state.bey.filter((bey)=>bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    render(){
    let  favArray = this.state.bey.filter((bey)=> bey.favorite)
    let filteredBey = this.filteredBeys()

    return (
      <div className="container">
        <BeyContainer 
        appClickHandler={this.appClickHandler} 
        submitHandler={this.submitHandler} 
        beyArray={this.filteredBeys()}
        searchHandler={this.searchHandler}
        />
        <Favorites bey={favArray} favoriteContainer={this.favoriteContainer}/>
      </div>
    );
  }
};

export default App;
