import React from 'react'
import pic1 from '../../images/insta.png'


function Instabubble() {
  return (
    <>
        
        <div className='insta-container'>
                <div className="bubble">                  
                    <a href="https://www.instagram.com/fabriquefrancois/" target="_blank">
                        <div className="thumb">
                            {/* <img src={`../../../src/images/insta.png`} alt="insta"/> */}
                        </div>                   
                    </a>
                </div>
             <img src={pic1} alt="insta" className='insta-img'/> 
       </div>
    </>

  )
}

export default Instabubble