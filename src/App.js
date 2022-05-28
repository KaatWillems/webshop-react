
import Allproducts from './components/Allproducts';
import Home from './components/Home';
//import Headerproduct from './components/Headerproduct';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>

    <Routes>

      <Route index element={<Home/>} /> 
      <Route path="*" element={<div>404 page not found</div>} />
      <Route path="/products" element={<Allproducts/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
