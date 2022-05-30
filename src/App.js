
import Allproducts from './components/Allproducts';
import Home from './components/Home';
//import Headerproduct from './components/Headerproduct';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Productsjeans from './components/Productsjeans';

function App() {
  return (
    <Router>

    <Routes>

      <Route index element={<Home/>} /> 
      <Route path="*" element={<div>404 page not found</div>} />
      <Route path="/products" element={<Allproducts/>} /> 
      {/* Dresses, Tops, Sweaters, Trousers, Skirts, Jackets  */}
      <Route path="/products/jeans" element={<Productsjeans/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
