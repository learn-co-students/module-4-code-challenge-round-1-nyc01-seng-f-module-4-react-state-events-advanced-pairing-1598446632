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

  removeHandler = () => {
    
    this.setState({favorite: !this.state.favorite}, () => this.props.selectBeys(this.state))
  }

  clickHandler = () => {
    this.setState({num_of_clicks: this.state.num_of_clicks + 1}, () => this.props.sortingBeys(this.state))
  }

  render(){
    return (
      <div>
        <h3>{this.state.name}</h3>
        <img alt="BEY" onClick={this.clickHandler} src={this.state.img} />
        <h4> {this.state.num_of_clicks} times clicked</h4>
        <button onClick={this.removeHandler}>{this.state.favorite === false ? "Add" : "Remove"}</button>
      </div>
    );
  }
};

export default BeyCard;
