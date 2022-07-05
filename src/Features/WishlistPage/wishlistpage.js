import React from "react";
import "./wishlistpage.css";
import { Header } from "../../Components/header/header";
import { WishCard } from "../../Components/cards/wishcard";
const WishlistPage = () => {
    return (
    <div class="container">
      <main class = "main">
         <Header/>
         <div class = "products">
          <WishCard/>
         </div>
      </main>
    </div>
    );
  };
  
  export { WishlistPage };