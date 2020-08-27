import React from "react";
import BeyCard from './BeyCard'
import Form from './Form'
import beyArray from './api'
class BeyContainer extends React.Component {

  state = {
    apibeyArray: beyArray
  }

  submitHandler = (obj) => {
    let newArray = [...this.state.apibeyArray, obj]
    this.setState({
      apibeyArray: newArray }, () => console.log('new state:', this.state.apibeyArray)
    )
  }

  render() {
    let apibeyArray = this.state.apibeyArray.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.state.apibeyArray}
        <Form submitHandler={this.submitHandler}/>

      </div>
    );
  }
}

export default BeyContainer;