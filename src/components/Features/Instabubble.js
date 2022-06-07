import React from 'react'
import pic1 from '../../images/insta.png'


function Instabubble() {
  return (
    <>
        <a href="https://www.instagram.com/fabriquefrancois/" target="_blank" >
        <div className='insta-container'>
                <div className="bubble">                  
                    
                        <div className="thumb">
                           
                            {/* <img src={`../../../src/images/insta.png`} alt="insta"/> */}
                        </div>                   
                    
                </div>
                
             <img src={pic1} alt="@fabriquefrancois" className='insta-img'/> 
             
       </div>
       </a>
       <div className='follow-text'> Volg <a href="https://www.instagram.com/fabriquefrancois/" target="_blank" className='link-underline'> @fabriquefrancois </a> 
        <br /> op Instagram</div>
        
    </>

  )
}

export default Instabubble