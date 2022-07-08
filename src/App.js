import {useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import Allproducts from './components/Productpages/Allproducts';
import Home from './components/Homepage/Home';
import Productsjeans from './components/Productpages/Productsjeans';
import Productsdresses from './components/Productpages/Productsdresses';
import Productstops from './components/Productpages/Productstops';
import Productssweaters from './components/Productpages/Productssweaters';
import Productstrousers from './components/Productpages/Productstrousers';
import Productsskirts from './components/Productpages/Productsskirts';
import Productsjackets from './components/Productpages/Productsjackets';
import Cart from './components/Cart/Cart'

import products from './products.json'

function App() {
  const [cartitems, setCartitems] = useState('')

  const addToCart = (addedItem) => {
    

    setCartitems([...cartitems, addedItem])

    //console.log(addedItem)
  }
  console.log(cartitems)
  return (
    <Router>

    <Routes>

      <Route index element={<Home/>} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="*" element={<div>404 page not found</div>} />
      <Route path="/products" element={<Allproducts products={products}/>} /> 
      {/* Dresses, Tops, Sweaters, Trousers, Skirts, Jackets  */}
      <Route path="/products/jeans" element={<Productsjeans products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/dresses" element={<Productsdresses products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/tops" element={<Productstops products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/sweaters" element={<Productssweaters products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/trousers" element={<Productstrousers products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/skirts" element={<Productsskirts products={products} addToCart={addToCart}/>} /> 
      <Route path="/products/jackets" element={<Productsjackets products={products} addToCart={addToCart}/>} /> 

      <Route path="/cart" element={<Cart cartitems={cartitems}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
