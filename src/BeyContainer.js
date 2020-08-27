import React from "react";
import BeyCard from "./BeyCard.js"
import Search from './Search'



class BeyContainer extends React.Component {

state={
  searchValue: "",
}

searchHandler =(e) =>{
  e.preventDefault()
  console.log("searchhandler", e.target.value)
  this.setState({searchValue: e.target.value})
}
filterBeys=()=>{
  return this.props.array.filter((beyObj) => beyObj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
}
  


beyCard = () => {
     return this.filterBeys().map(beyObj => {  
      return <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>
    })
  }

  //need to access props from App - can access the array and iterate over it to come up with values for each beyCard. 
  // pass through id and whole object, can choose specific values in the beyCard 
  //remember to invoke this below, as well as display it on the beyCard.js



  changeHandler = (e) =>{
    this.setState({searchValue: e.target.value})
    // console.log(e.target.value)
  }


  render() {
    // console.log(this.beyCard)
    return (
      <div className="index">
        <h1>Index</h1>
        <Search searchValue={this.state.searchValue} changeHandler={this.changeHandler}/>
        {this.beyCard()}
      </div>
    );
  }
}
export default BeyContainer;