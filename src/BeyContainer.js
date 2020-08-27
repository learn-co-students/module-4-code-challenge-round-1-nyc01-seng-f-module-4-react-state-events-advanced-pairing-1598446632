import React from "react";
import BeyCard from "./BeyCard.js"



class BeyContainer extends React.Component {

  beyCard = () => {
     return this.props.array.map(beyObj => {  
      return <BeyCard key={beyObj.id} beyObj={beyObj} clickHandler={this.props.clickHandler}/>
    })
  }

  //need to access props from App - can access the array and iterate over it to come up with values for each beyCard. 
  // pass through id and whole object, can choose specific values in the beyCard 
  //remember to invoke this below, as well as display it on the beyCard.js


  render() {
    // console.log(this.beyCard)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyCard()}
      </div>
    );
  }
}
export default BeyContainer;