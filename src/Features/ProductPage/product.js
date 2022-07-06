import React,{useState,useEffect} from "react";
import { Header } from "../../Components/header/header";
import { Filters } from "./filterProduct";
import { ProductCard } from "../../Components/cards/productcard";
import { Usernav } from "../../Components/header/user-nav";
import axios from "axios";
import { useFilter } from "../../Contexts";
import {
	ComposeFunction,
	sortbyPriceFunction,
	filterByPrice,
	filterByRatings,
	filterByCategory,
} from "../../utilities/filters";
import "./product.css";
const ProductPage = () => {
    const [products,setProducts] = useState([]);
    const { state } = useFilter();
    useEffect(()=>{
        (async () => {
            try{
                const response = await axios.get("/api/products");
                if(response.status===200){
                    setProducts([...response.data.products]);
                }
            }catch (error){
                console.log(error);
            }
        })();
	}, []);
    const Products = ComposeFunction(
		sortbyPriceFunction,
		filterByPrice,
		filterByRatings,
		filterByCategory
	)(state, products);
    return (
      <div className = "container">
        <Usernav/>
       <Header/>
        <div className = "main-container">
            <Filters/>
               <div className="sub-container">
                   <main className = "product-display-main">
                       <div className = "products">
                            {
                                Products.map((product)=>(
                                    <ProductCard key ={product.id} product ={product} />
                                    

                                ))}
                         
                          </div>
                      
       
   </main></div></div></div>
   

    );
  };
  
  export { ProductPage };