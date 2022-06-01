import React from 'react'
import Navbar from '../Features/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../Features/Logo'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Headerproduct() {
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
                <div className='cart'></div>
                <div className='account'></div>
                 <div className='search'></div>
               </div>    
             
       </div>  
  
      </div>
  
  </>



  )
}

export default Headerproduct