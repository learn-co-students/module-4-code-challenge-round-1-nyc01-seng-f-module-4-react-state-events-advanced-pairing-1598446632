import React from "react";

class BeyCard extends React.Component {

  addHandler = () => {
    this.props.selectBeys(this.props.bey)
  }

  removeHandler = () => {
    this.props.deSelectBeys(this.props.bey)
  }

  clickHandler = () => {
    this.props.sortingBeys(this.props.bey)
  }

  render(){
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img alt="BEY" onClick={this.props.containerIndex ? this.clickHandler : null } src={this.props.bey.img} />
        <h4> {this.props.bey.num_of_clicks} times clicked</h4>
        {this.props.bey.favorite === false ? <button onClick={this.addHandler}>Add</button> : null }
        {this.props.favIdex ? <button onClick={this.removeHandler}>Remove</button> : null }
      </div>
    );
  }
};

export default BeyCard;
