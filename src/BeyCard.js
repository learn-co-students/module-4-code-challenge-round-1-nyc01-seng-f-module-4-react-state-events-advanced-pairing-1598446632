

import React from "react";
import { render } from "react-dom";


const BeyCard =(props) => {  //REFACTORED: use props //ORIGINAL: passes through the beyObj key defined in parent.  we also pass through clickhandler as second argument since this is set up as a function and cannot pass props
// console.log("card props", props)  
  return (
    <div>
      <h3>{props.beyObj.name}</h3>
      <img onClick={()=>props.clickHandler(props.beyObj.id)} src={props.beyObj.img} />
    </div>
  );

};

//add onClick (even if empty first), this will communicate to the app, so we need a callbackfunction on app
//when clickhandler is called, pass through the id that was clicked on.  then app can use the id, find it, and update it in the array. since we are passing it through here, we need to pass it through in the click handler.
//wrap the clickhandler in an anonymous function since this is a function, not a class

export default BeyCard;


//()=>props.clickHandler(props.bey.id) is the same as function(){props.clickHandler(props.bey.id)}