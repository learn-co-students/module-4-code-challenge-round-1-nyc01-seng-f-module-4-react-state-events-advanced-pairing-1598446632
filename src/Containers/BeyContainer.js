import React from "react";
import BeyCard from '../Components/BeyCard'
import Search from '../Components/Search'


class BeyContainer extends React.Component {

  //note: took out the prop key= id during refactor on each beyCrad - since new ones won't have an ID: key={beyObj.id}

  

  beyCardCreator = () => {
    
    return this.props.apiData().map(beyObj => <BeyCard key={beyObj.id} beyObject={beyObj} appClickHandler={this.props.appClickHandler} />)
  }

  render() {
  
    return (
      <div className="index">
        <Search searchHelper={this.props.searchHelper} searchValue={this.props.searchValue}/>
        <h1>Index</h1>
        {this.beyCardCreator()}
      </div>
    );
  }
}

export default BeyContainer;
