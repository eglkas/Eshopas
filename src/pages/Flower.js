import React from "react";
import flowerList from "../components/FlowerList";
import MenuItem from "../components/FlowerItem";
import "../styles/Flower.css";

function Flower() {
   return (
      <div className="flower">
         <h1 className="flowerTitle">Gėlės</h1>
         <div className="flowerList">
            {flowerList.map((flowerItem, key) => {
               return (
                  <MenuItem
                     key={key}
                     image={flowerItem.image}
                     name={flowerItem.name}
                     price={flowerItem.price}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default Flower;
