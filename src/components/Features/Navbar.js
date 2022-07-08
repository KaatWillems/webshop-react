import React from 'react'
import { Link } from  'react-router-dom'

function Navbar(props) {
  return (
    <ul className={props.className}>    
         <Link to="/products/jeans" className='links-nav'><li>Jeans</li></Link> 
         <Link to="/products/dresses" className='links-nav'><li>Dresses</li></Link> 
         <Link to="/products/tops" className='links-nav'><li>Tops</li></Link> 
         <Link to="/products/sweaters" className='links-nav'><li>Sweaters</li></Link> 
         <Link to="/products/trousers" className='links-nav'><li>Trousers</li></Link> 
         <Link to="/products/skirts" className='links-nav'><li>Skirts</li></Link> 
         <Link to="/products/jackets" className='links-nav'><li>Jackets</li></Link> 
         <Link to="/products" className='links-nav'><li>All</li></Link> 


    </ul>
  )
}

export default Navbar