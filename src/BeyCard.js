import React from "react";

class BeyCard extends React.Component {
  

  clickHandler = () => {
    this.props.appClickHandler(this.props.beyInfo)
  }

  render() {
    return (
      <div>
        <h3>{this.props.beyInfo.name}</h3>
        <img onClick={this.clickHandler} alt={this.props.beyInfo.name} src={this.props.beyInfo.img}/>
      </div>
    );
  }
  
};

export default BeyCard;
