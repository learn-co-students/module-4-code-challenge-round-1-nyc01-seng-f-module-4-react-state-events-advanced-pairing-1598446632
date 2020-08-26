import React from "react";

class BeyCard extends React.Component {
  clickHandler = () => {
    //this.props.bey.favorite = !this.props.bey.favorite
    this.props.reverseBey(this.props.bey)
  }
  
  render() {
      return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img src={this.props.bey.img} alt="Beyonce" onClick={this.clickHandler}></img>
      </div>
    );
  }
  
  
};

export default BeyCard;
