import React from 'react'
import { Link } from  'react-router-dom'

function Navbar() {
  return (
    <ul className='navbar'>    
         <Link to="/products/jeans"><li>Jeans</li></Link> 
         <Link to="/products/dresses"><li>Dresses</li></Link> 
         <Link to="/products/tops"><li>Tops</li></Link> 
         <Link to="/products/sweaters"><li>Sweaters</li></Link> 
         <Link to="/products/trousers"><li>Trousers</li></Link> 
         <Link to="/products/skirts"><li>Skirts</li></Link> 
         <Link to="/products/jackets"><li>Jackets</li></Link> 


    </ul>
  )
}

export default Navbar