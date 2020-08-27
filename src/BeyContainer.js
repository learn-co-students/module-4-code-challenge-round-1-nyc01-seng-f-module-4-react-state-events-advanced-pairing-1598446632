import React from "react";
import BeyCard from './BeyCard'
import BeyForm from './BeyForm'
import SearchForm from './SearchForm'

class BeyContainer extends React.Component {

  createBeyCards = () => {
    return (this.props.beys.map(bey => {
        return(<BeyCard key={bey.id} appClickHandler={this.props.appClickHandler} bey={bey}/>)
      } 
    ))

  }

  render() {
    return (
      <div className="index">
        <h1>Make your own Bey!</h1>
        <BeyForm createBey={this.props.createBey}/>
        <br/>
        {/* <h1>Search Beys</h1> */}
        <SearchForm searchTerm={this.props.searchTerm} searchHandler={this.props.searchHandler}/>
        <h1>Index</h1>
        {this.createBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
