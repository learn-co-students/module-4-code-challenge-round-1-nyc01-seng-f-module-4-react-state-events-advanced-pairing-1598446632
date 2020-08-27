import React from "react";

const BeyCard = (props) => {
  return ( 
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={() => props.clickHandler(props.bey.id)} src={props.bey.img} alt="bey.name"/>
    </div>
  );
};

export default BeyCard;
