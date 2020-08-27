import React from "react";

class BeyCard extends React.Component {

  constructor(props){
    super()
    this.state = {
      id: props.bey.id,
      name: props.bey.name,
      img: props.bey.img,
      favorite: props.bey.favorite,
      num_of_clicks: props.bey.num_of_clicks
    }
  }

  // state = {
  //   favorite: false,
  //   num_of_clicks: this.props.bey.num_of_clicks
  // }

 

  clickHandler = () => {
    this.setState(this.props.selectBeys)
  }

  render(){

    return (
      <div>
        <h3>{this.state.name}</h3>
        <img alt="BEY" onClick={this.clickHandler} src={this.state.img} />
        <h4> {this.state.num_of_clicks} times clicked</h4>

      </div>
    );
  }
};

export default BeyCard;
