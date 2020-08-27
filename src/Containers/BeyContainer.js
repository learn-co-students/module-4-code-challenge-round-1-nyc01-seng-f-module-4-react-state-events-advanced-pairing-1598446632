import React from "react";
import beyArray from '../api'
import BeyCard from '../Components/BeyCard'
import Form from '../Components/Form'

class BeyContainer extends React.Component {

  render() {
    
    let fetchBey = this.props.beyArray.map((bey)=><BeyCard bey={bey} appClickHandler={this.props.appClickHandler}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        <Form submitHandler={this.props.submitHandler}/>
        {fetchBey}
      </div>
    );
  }
}

export default BeyContainer;
