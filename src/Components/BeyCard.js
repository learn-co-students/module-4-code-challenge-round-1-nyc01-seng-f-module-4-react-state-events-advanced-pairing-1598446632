import React from "react";


class BeyCard extends React.Component {
  
  // state = {
  //   beenClicked: this.props.beyObject.favorite
  // }

  clickHelper = () => {
    //this.props.beyObject.favorite = !this.props.beyObject.favorite
    this.props.appClickHandler(this.props.beyObject) 
  
  }
    
  

  render() {
    return (
      <div>
        <h3>{this.props.beyObject.name}</h3>
        <img onClick={this.clickHelper} src={this.props.beyObject.img} />
      </div>
    );
  }
};

export default BeyCard;
