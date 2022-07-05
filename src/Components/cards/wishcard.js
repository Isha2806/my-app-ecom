import React from "react";
import "./cards.css" ;
const WishCard = ({product})=> {  
    return(
        <div class="component-example">
          <div class="card card-ecommerce">
            <div class="card-badge">Limited stock </div>
              <img class="card-img" src={product.image} />
            <div class="card-titles">
              <h2>{product.title}</h2></div>
            <button class="card-button"> Cart Now ! </button>
          </div>
        </div>
    );
}

export {WishCard};