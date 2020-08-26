import React from "react";
import BeyCard from '../Components/BeyCard'



class BeyContainer extends React.Component {

  beyCardCreator = () => {
    console.log(this.props.apiData)
    return this.props.apiData.map(beyObj => <BeyCard key={beyObj.id} beyObject={beyObj} appClickHandler={this.props.appClickHandler} />)
  }

  render() {
  
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beyCardCreator()}
      </div>
    );
  }
}

export default BeyContainer;
