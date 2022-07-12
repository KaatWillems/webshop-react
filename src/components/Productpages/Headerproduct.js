import React from 'react'
import Navbar from '../Features/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../Features/Logo'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineShopping } from "react-icons/ai";
import { Input, Select, Button, Badge } from "antd";

function Headerproduct(props) {
console.log(props.cartcount);

  return (
  <>
      <div className="header-container">

        <div className="banner">
            <p className="banner-text">Free shipping in Belgium</p>

        </div>

       <div className='header-container--botttom'> 
          <Link to="/home"> 
            <Logo className="logo logo-small" />
          </Link>
          
             <Navbar className="navbar navbar-product-page"  />
             <div className='header-icons'>
             <Link to='/cart'> <Badge count={props.cartcount} className='count-badge-cart'><AiOutlineShopping className='cart-bag-icon'/></Badge></Link>
                <div className='account'></div>
                 <div className='search'></div>
               </div>    
             
       </div>  
  
      </div>
  
  </>



  )
}

export default Headerproduct