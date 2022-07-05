import "./App.css";
import {Routes,Route} from "react-router-dom";
import {HomePage,ProductPage,WishlistPage,CheckoutPage,CartPage} from "./Features";
import logo from "./logo.png";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes> 
          <Route path = "/" element = { <HomePage/> }/>
          <Route path="/products" element={<ProductPage />} />
          <Route path = "/wishlist" element = {<WishlistPage/>}/>
          <Route path = "/cart" element = {<CartPage/>}/>
          <Route path = "/checkout" element = {<CheckoutPage/>}/>
          <Route path="/mockman" element={<Mockman />} />

      </Routes>
    </div>
  
  );
}

export default App;
