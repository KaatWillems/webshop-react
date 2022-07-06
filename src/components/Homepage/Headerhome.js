import React from 'react'
import Instabubble from '../Features/Instabubble'
import Logo from '../Features/Logo'
import Navbar from '../Features/Navbar'

function Headerhome() {
  return (
    <div className='headerhome-cont'>
      <div className="banner">
            <p className="banner-text">Free shipping in Belgium</p>
        </div>
        <Logo className="logo logo-home"/>
         <div className='nav-insta-cont'>            
            <div className='instabubble-cont-homepage'>
              <Instabubble />
            </div>

            <Navbar />

            <div className='home-headericons'>
                <div className='cart'></div>
                <div className='account'></div>
                 <div className='search'></div>
            </div>    
        </div>
     
    </div>
  )
}

export default Headerhome