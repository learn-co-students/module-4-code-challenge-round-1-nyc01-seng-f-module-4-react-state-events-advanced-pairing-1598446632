import React from "react";

class BeyCard extends React.Component {

  beyCardClickHandler = () => {
    this.props.appClickHandler(this.props)
  }

  render () {
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img onClick={this.beyCardClickHandler} alt={this.props.bey.name} src={this.props.bey.img} />
        <p>Number of clicks: {this.props.bey.num_of_clicks}</p>
      </div>
    );
  }
}

export default BeyCard;
