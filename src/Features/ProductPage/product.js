import React from "react";
import "./product.css";
const ProductPage = () => {
    return (
      <div class = "container">
   
      <div class="login-page-logo logo">
           <span class="p-1">N</span>
           <span class="p-2">G</span>
           <span>Neog</span><span>Cart</span>
       </div>
 
           <div class = "main-container">
               <side class = "side-left">
                    <aside class="product-filter-section">
                   <div class="product-filter-heading">
                       <p class="fw-7">Filters</p>
                       <a href="#">Clear</a>
                   </div>
                   <div class="price-range-container">
                       <p class="fw-7">Price Range</p>
                       <div>
                           <div class="price-range-values">
                               <p>100</p>
                               <p>1000</p>
                               <p>5000</p>
                           </div>
                           <input type="range" min="0" max="5000" class="price-slider"/>
                        </div>
                   </div>
                   <div class="input-filter-container">
                       <p class="fw-7">Category</p>
                       <ul class="check-lists">
                           <li><input type="checkbox"/>Neogrammer</li>
                           <li><input type="checkbox"/>NeoGrad</li>
                           <li><input type="checkbox"/>Neo-Team</li>
                       </ul>
                   </div>
                   <div class="input-filter-container">
                       <p class="fw-7">Rating</p>
                       <ul class="check-lists">
                           <li><input type="radio" name="star-rating"/>4 Stars & above</li>
                           <li><input type="radio" name="star-rating"/>3 Stars & above</li>
                           <li><input type="radio" name="star-rating"/>2 Stars & above</li>
                           <li><input type="radio" name="star-rating"/>1 Stars & above</li>
                       </ul>
                   </div>
                   <div class="input-filter-container">
                       <p class="fw-7">Sort by</p>
                       <ul class="check-lists">
                           <li><input type="radio" name="sort-by"/>Price - Low to High</li>
                           <li><input type="radio" name="sort-by"/>Price - High to Low</li>
                          
                       </ul>
                   </div>
               </aside>

               </side>
               <div class="sub-container">
                   <main class = "product-display-main">
                       <p class="Product-category-name">All Neog-Cart Products</p>
                       <div class = "products"> 
                          
                           <div class="component-example">
                                <div class="card card-ecommerce">
                                <div class="card-badge">Limited stock </div>
                                 <img class="card-img" src="/images/AirPods/airpods-1.png" />
                                <div class="card-titles">
                                    <h2>Reward Hamper</h2>
                                </div>
                                <button class="card-button"> Claim Now ! </button>
                                 </div>
                            </div>
                  
 <div class="component-example">
                   <div class="card card-ecommerce">
     <div class="card-badge">Limited stock </div>
    <img class="card-img" src="/images/AirPods/airpods-1.png" />
    <div class="card-titles">
      <h2>Reward Hamper!
      </h2>
    </div>

    <button class="card-button"> Claim Now ! </button>
    </div></div>
      
                       <div class="component-example">
                           <div class="card card-ecommerce">
                              <div class="card-badge">Limited stock </div>
                             <img class="card-img" src="/images/AirPods/airpods-2.png" />
                             <div class="card-titles">
                               <h2>Reward Hamper!
                               </h2>
                             </div>
                             <button class="card-button"> WishList </button>
                             <button class="card-button"> Buy </button>
                             </div></div>
            
            <div class="component-example">
               <div class="card card-ecommerce">
                  <div class="card-badge">Limited stock </div>
                 <img class="card-img" src="/images/AirPods/airpods-1.png" />
                 <div class="card-titles">
                   <h2>Reward Hamper!
                   </h2>
                 </div>
     
                 <button class="card-button"> Claim Now ! </button>
                 </div></div>
         
                       <div class="component-example">
                           <div class="card card-ecommerce">
                              <div class="card-badge">Limited stock </div>
                             <img class="card-img" src="/images/watches/watch-case-7.png" />
                             <div class="card-titles">
                               <h2>Reward Hamper!
                               </h2>
                             </div>
                             <button class="card-button"> WishList </button>
                             <button class="card-button"> Buy </button>
                             </div></div>
                            </div>
       
   </main></div></div></div>
   

    );
  };
  
  export { ProductPage };