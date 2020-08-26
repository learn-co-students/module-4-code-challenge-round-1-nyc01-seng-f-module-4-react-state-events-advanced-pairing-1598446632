import React from "react";

class BeyCard extends React.Component {

  // constructor(props){
  //   super(props)
  //   // this.favorite = this.props.bey.favorite
  // }
  

  favoriteHandler = (e) => {
    this.props.appClick(this.props.bey)
  }
  
 
  render() {
    console.log("Rendering Action in BeyCard")
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img onClick={this.favoriteHandler} src={this.props.bey.img} alt="" />
      </div> 
    );
  }
};

export default BeyCard;
