import React from "react";


class BeyCard extends React.Component {


  clickHandler = () => {
   this.props.appClickHandler(this.props.bey)
  }
  render(){
     
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img onClick={this.clickHandler} alt={this.props.bey.name} src={this.props.bey.img} />
      </div>
    );
  };
  }


export default BeyCard;
