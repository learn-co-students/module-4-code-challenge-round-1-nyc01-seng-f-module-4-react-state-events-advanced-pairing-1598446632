import React from "react";
// import beyArray from './api'

class BeyCard extends React.Component {

 
  beyClickHandler=()=>{
    this.props.appClickHandler(this.props.bey)
  }

  render() {
    let {bey} =this.props
    return (
      <div>
        <h3>{bey.name}</h3>
        <img onClick={this.beyClickHandler} src={bey.img} alt=""/>
      </div>
    );
    
  }
}


export default BeyCard;
