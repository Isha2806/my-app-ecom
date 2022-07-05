import React from "react";
import "./cards.css" ;
const ProductCard = ({product})=> { 
  return( <h1>

     <div className ="component-example">
        <div className ="card card-ecommerce">
          <div className ="card-badge">Limited stock </div>
            <img className ="card-img" src= {product.image} alt = {product.title}/>
              <div className ="card-titles">
                <h2>{product.title}</h2>
                <p> ₹ {product.price}</p>
                <p>{product.author}</p>
              </div>
          <button className ="card-button"> Move to Cart </button>
          <button className ="card-button"> Wish </button>
          </div>
        </div>
  </h1>
  );
}

export {ProductCard};