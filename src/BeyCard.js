import React from "react";

class BeyCard extends React.Component{
beyClickHandler = () =>{
  this.props.appClickHandler(this.props)
}
  render(){
    console.log(this.props)
  return (
    <div>
      <h3>{this.props.bey.name}</h3>
     <img onClick={this.beyClickHandler} alt=" " src= {this.props.bey.img}/>
    </div>
  );
  }
};

export default BeyCard;
