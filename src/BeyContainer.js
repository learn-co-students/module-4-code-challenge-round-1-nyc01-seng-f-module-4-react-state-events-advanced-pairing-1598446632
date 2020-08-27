import React from "react";
import BeyCard from './BeyCard'
class BeyContainer extends React.Component {

  beys = () => {
    if(this.props.filtered.length > 0){
      return this.props.filtered.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
    }else{
      return this.props.array.map((beyObj) => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler} />)
    }
    
  }
 
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;

//this.props.filtered.length > 0 ? this.props.filtered : 