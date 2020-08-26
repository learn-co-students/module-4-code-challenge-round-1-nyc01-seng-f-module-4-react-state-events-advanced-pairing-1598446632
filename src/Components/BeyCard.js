import React from "react";

class BeyCard extends React.Component {



  
  contClickHandler=() => {
    this.props.favClickHandler(this.props.bey.id)
  }
  
  render() {

  return (
    <div>
      <h3>{this.props.bey.name} </h3>
      <img onClick={this.contClickHandler} src={this.props.bey.img} alt=''/>
      <p>Num of Clicks: {this.props.bey.num_of_clicks}</p>
    </div>
  );
};

}

export default BeyCard;
