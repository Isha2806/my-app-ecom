import "./App.css";
import {Routes,Route} from "react-router-dom";
import {HomePage,ProductPage} from "./Features";
import logo from "./logo.png";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes> 
          <Route path = "/" element = { <HomePage/> }/>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/mockman" element={<Mockman />} />

      </Routes>
    </div>
  
  );
}

export default App;
