import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'
// import Form from '../Components/Form'
class BeyContainer extends React.Component {

  beys = () => {
    return this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
  }

  // state = {
  //   array: beyArray
  // }

  // submitHandler = (beyObj) => {
  //   let newArray = [...this.state.beyArray, beyObj]
  //   this.setState({array: newArray})
  // }

  render() {
    return (
      <div className="index">
        {/* <Form submitHandler={this.submitHandler}/> */}
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer
