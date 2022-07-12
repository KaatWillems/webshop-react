import React from 'react'
import {Link} from 'react-router-dom'
import Instabubble from '../Features/Instabubble'
import Logo from '../Features/Logo'
import Navbar from '../Features/Navbar'
import { AiOutlineShopping } from "react-icons/ai";
import { Input, Select, Button, Badge } from "antd";

function Headerhome(props) {
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
            <Link to='/cart'> <Badge count={props.cartcount} className='count-badge-cart'><AiOutlineShopping className='cart-bag-icon'/></Badge></Link>
                <div className='account'></div>
                 <div className='search'></div>
            </div>    
        </div>
     
    </div>
  )
}

export default Headerhome