import React from "react";
import { render } from "react-dom";

class BeyCard extends React.Component {
  state = {favorite: false}

  checkFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  } 
     // return this.setState(this.props.appClickHandler(this.props))

  handleClick = () => {
    //invoke check favorite
    this.checkFavorite()
  }

  render(){
  return (
    <div>
      <h3>{this.props.name}</h3>
      <img src={this.props.img} onClick={this.handleClick} />
    </div>
  );
  }
};

export default BeyCard;





  //   this.setState(lastState => {favorite: !lastState.favorite}),
  //     () => console.log(this.state)
  // }

  // (lastState => {
  //   return { 
  //     favorite: !lastState.favorite
  //   }
  // })

  // handleClick = () => {
  //   return this.props.appClickHandler(this.props)
  // }
