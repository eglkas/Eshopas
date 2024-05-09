import React from "react";

function FlowerItem({ image, name, price }) {
  return (
    <div className="flowerItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default FlowerItem;