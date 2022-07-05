import React,{useState,useEffect} from "react";
import { Header } from "../../Components/header/header";
import { Filters } from "./filterProduct";
import { ProductCard } from "../../Components/cards/productcard";
import "./product.css";
const axios = require("axios").default;
const ProductPage = () => {
    const [products,setProducts] = useState([]);
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
    
    return (
      <div className = "container">
       <Header/>
        <div className = "main-container">
            <Filters/>
               <div className="sub-container">
                   <main className = "product-display-main">
                       <div className = "products">
                            {
                                products.map((product)=>(
                                    <ProductCard key ={product.id} product ={product} />
                                    

                                ))}
                         
                          </div>
                      
       
   </main></div></div></div>
   

    );
  };
  
  export { ProductPage };