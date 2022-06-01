import React from 'react'
import Instabubble from '../Features/Instabubble'
import Logo from '../Features/Logo'
import Navbar from '../Features/Navbar'

function Headerhome() {
  return (
    <div className='headerhome-cont'>
        <Logo className="logo logo-home"/>
      <div className='nav-insta-cont'>
            <Navbar />
            <Instabubble />
      </div>
    </div>
  )
}

export default Headerhome