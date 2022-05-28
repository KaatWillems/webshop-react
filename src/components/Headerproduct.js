import React from 'react'
import Navbar from './Navbar'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Headerproduct() {
  return (
  <>
      <div className="header-container">

        <div className="banner">
            <p className="banner-text">Free shipping in Belgium</p>

        </div>

       <div className='header-container--botttom'> 
           <div className="logo"> </div>
           <Navbar  />
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