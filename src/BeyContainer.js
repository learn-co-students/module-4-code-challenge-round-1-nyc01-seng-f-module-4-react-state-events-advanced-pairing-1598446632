import React from "react";
import BeyCard from './BeyCard'
import Form from './Form'
import Search from './Search'
class BeyContainer extends React.Component {

 state = {
   apiList: this.props.array,
   searchValue: ''
 }


/*  beys = () => {
    return this.state.apiList.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
} */

  //adding a new gif to the array 
  submitHandler = obj => {
    let newArray = [...this.state.apiList, obj] //append that new obj
    this.setState({ apiList: newArray}, () => console.log("updated list:", this.state.apiList)) 
  }

  //setting the updated search value
  searchHandler = e => {
    this.setState({searchValue: e.target.value})
  }

  filterBey = () => {
    return this.state.apiList.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }


  render() {
    let filteredList = this.filterBey().map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)

    return (
      <div className="index">
        <h1>Index</h1>
        <h3>search</h3>
        <Search searchValue={this.searchValue} searchHandler={this.searchHandler}/>
        <h3>create new Gif</h3>
        <Form submitHandler={this.submitHandler} />
        {filteredList}
      </div>
    );
  }
}

export default BeyContainer;