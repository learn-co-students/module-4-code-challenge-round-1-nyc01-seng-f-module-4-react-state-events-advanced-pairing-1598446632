import React from "react";
import beyArray from "./api.js"
import BeyCard from "./BeyCard.js"

class BeyContainer extends React.Component {

  beyCard = () => {
    return beyArray.map(beyObj => {
      return <BeyCard id={beyObj.id} name={beyObj.name} img={beyObj.img} favorite={beyObj.favorite} num_of_clicks={beyObj.num_of_clicks} appClickHandler={this.props.appClickHandler}/>
    })
  }


  render() {
    // console.log(this.beyCard)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyCard()}
      </div>
    );
  }
}

export default BeyContainer;
