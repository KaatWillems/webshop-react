import React from 'react'
import {Link} from 'react-router-dom'
import coll1 from '../../images/collage1.jpg'
import coll2 from '../../images/collage2.jpg'
import coll3 from '../../images/collage3.jpg'
import coll4 from '../../images/collage4.jpg'
import coll7 from '../../images/collage7.jpg'
 import coll9 from '../../images/collage9.jpg'
 import logo from  '../../images/logo4.png'

function Featuredblocks() {
  return (
   <>
     <div className='featured-collage-parent-container'>
        <div className='featured-collage-container'>
      
  
        <a href="/products/jackets" className='img-collage-1 ic' style={{ backgroundImage: `url(${coll1})` }}>  <div > <p>Jackets</p></div> </a>

         <a href="/products" style={{ backgroundImage: `url(${coll7})` }}className='img-collage-2 ic'> <div > <p>Sunglasses</p></div></a>

         <a href="/products/sweaters" style={{ backgroundImage: `url(${coll2})` }}className='img-collage-2 ic'> <div ><p>Sweaters</p></div></a>

         <a href="/products/jeans" style={{ backgroundImage: `url(${coll3})` }}className='img-collage-3 ic'> <div ><p>Jeans</p></div></a>

         <a href="/products" style={{ backgroundImage: `url(${coll9})` }}className='img-collage-3 ic'> <div ><p>Accessories</p></div></a>

         <a href="/products/tops" style={{ backgroundImage: `url(${coll4})` }}className='img-collage-4 ic'> <div ><p>Blouses</p></div></a>

       
        
        {/* <img src={coll2} alt="" className='img-collage-2' />
        <img src={coll3} alt="" className='img-collage-3' />
        <img src={coll4} alt="" className='img-collage-4' /> */}
            
        </div>
     </div>



      

  
   </>
  )
}

export default Featuredblocks