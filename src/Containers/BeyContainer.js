import React from "react";
import BeyCard from '../Components/BeyCard';
import Form from '../Components/Form';
import Search from '../Components/Search'


class BeyContainer extends React.Component {

  render() {
    
    let fetchBey = this.props.beyArray.map((bey)=><BeyCard bey={bey} appClickHandler={this.props.appClickHandler}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        <Form submitHandler={this.props.submitHandler}/>
        <Search searchHandler={this.props.searchHandler}/>
        {fetchBey}
      </div>
    );
  }
}

export default BeyContainer;
