import React from 'react'
import coll1 from '../../images/collage1.jpg'
import coll2 from '../../images/collage2.jpg'
import coll3 from '../../images/collage3.jpg'
import coll4 from '../../images/collage4.jpg'

function Featuredblocks() {
  return (
   <>
      <div className='featured-collage-container'>

        <div style={{ backgroundImage: `url(${coll1})` }}className='img-collage-1'></div>
        <div style={{ backgroundImage: `url(${coll2})` }}className='img-collage-2'></div>
        <div style={{ backgroundImage: `url(${coll3})` }}className='img-collage-3'></div>
        <div style={{ backgroundImage: `url(${coll4})` }}className='img-collage-4'></div>
      
      
      {/* <img src={coll2} alt="" className='img-collage-2' />
      <img src={coll3} alt="" className='img-collage-3' />
      <img src={coll4} alt="" className='img-collage-4' /> */}
          
      </div>



      

  
   </>
  )
}

export default Featuredblocks