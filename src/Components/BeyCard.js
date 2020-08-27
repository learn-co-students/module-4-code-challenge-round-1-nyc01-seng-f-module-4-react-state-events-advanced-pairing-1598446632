import React from "react";

const BeyCard = (props) => {

  return (
    <div>
      <h3>{props.bey.name} </h3>
      <img onClick={function () { props.contClickHandler(props.bey.id) }} src={props.bey.img} alt=''/>
      {props.favorite ? null : <h2>{props.bey.num_of_clicks}</h2>}
    </div>
  );

}

export default BeyCard;
