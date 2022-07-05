import React from "react";
import "./product.css";

const Filters= ()=>{
    return(
        <side className = "side-left">
        <aside className="product-filter-section">
       <div className="product-filter-heading">
           <p className="fw-7">Filters</p>
           <a href="#">Clear</a>
       </div>
       <div className="price-range-container">
           <p className="fw-7">Price Range</p>
           <div>
               <div className="price-range-values">
                   <p>100</p>
                   <p>1000</p>
                   <p>5000</p>
               </div>
               <input type="range" min="0" max="5000" className="price-slider"/>
            </div>
       </div>
       <div className="input-filter-container">
           <p className="fw-7">Category</p>
           <ul className="check-lists">
               <li><input type="checkbox"/>Neogrammer</li>
               <li><input type="checkbox"/>NeoGrad</li>
               <li><input type="checkbox"/>Neo-Team</li>
           </ul>
       </div>
       <div className="input-filter-container">
           <p className="fw-7">Rating</p>
           <ul className="check-lists">
               <li><input type="radio" name="star-rating"/>4 Stars & above</li>
               <li><input type="radio" name="star-rating"/>3 Stars & above</li>
               <li><input type="radio" name="star-rating"/>2 Stars & above</li>
               <li><input type="radio" name="star-rating"/>1 Stars & above</li>
           </ul>
       </div>
       <div className="input-filter-container">
           <p className="fw-7">Sort by</p>
           <ul className="check-lists">
               <li><input type="radio" name="sort-by"/>Price - Low to High</li>
               <li><input type="radio" name="sort-by"/>Price - High to Low</li>
              
           </ul>
       </div>
   </aside>

   </side>

    );
}
export {Filters};