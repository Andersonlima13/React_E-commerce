import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {BrowserRouter, Route , Routes } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/Product" element={<Product  />} />
          <Route path="/ProductList" element={<ProductList  />} />
        <Route path="/Register" element={<Register  />} />
        <Route path="/Cart" element={<Cart  />} />
        <Route path="/Login" element={<Login  />} />
      </Routes>
       
    </BrowserRouter>
  
  );
}

export default App;
