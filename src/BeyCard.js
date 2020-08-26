import React from "react";

class BeyCard extends React.Component {


  state = {
    numClicks: this.props.bey.num_of_clicks
  }

  clickHandler = () => {
    this.setState({
      numClicks: this.props.bey.num_of_clicks += 1
    }, () => this.props.reverseBey(this.props.bey)) 
  }
  
  render() {
      return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <h3>Number of clicks: {this.state.numClicks}</h3>
        <img src={this.props.bey.img} alt="Beyonce" onClick={this.clickHandler}></img>
      </div>
    );
  }
  
  
};

export default BeyCard;
