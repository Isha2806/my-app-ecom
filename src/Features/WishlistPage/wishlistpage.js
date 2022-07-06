import React, { useState, useEffect } from "react";
import "./wishlistpage.css";
import { Header } from "../../Components/header/header";
import { WishCard } from "../../Components/cards/wishcard";
const axios = require("axios").default;

const WishlistPage = () => {
  const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/products");
				if (response.status === 200) {
					setProducts([...response.data.products]);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

    return (
    <div class="container">
      <main class = "main">
         <Header/>
         <div class = "products">
        {  products.map((product) => (
							<WishCard key={product.id} product={product} />
						))}
				</div>
         
      
      </main>
    </div>
    );
  };
  
  export { WishlistPage };