import React from "react";
import BeyCard from '../Components/BeyCard'
// import beyArray from '../api'
import Search from '../Components/Search'
class BeyContainer extends React.Component {

  state = {
    searchTerm: ""
  }

  filterBeys = () => {
    return this.props.array.filter((beyObj) => beyObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  beys = () => {
    return this.filterBeys().map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
  }

  changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
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
        <Search changeHandler={this.changeHandler}/>
      
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer
