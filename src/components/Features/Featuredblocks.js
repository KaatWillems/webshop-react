import React from 'react'
import coll1 from '../../images/collage1.jpg'
import coll2 from '../../images/collage2.jpg'
import coll3 from '../../images/collage3.jpg'
import coll4 from '../../images/collage4.jpg'

function Featuredblocks() {
  return (
   <>
      <div className='featured-collage-container'>
      
      <img src={coll1} alt="" className='img-collage-1' />
      <img src={coll2} alt="" className='img-collage-2' />
      <img src={coll3} alt="" className='img-collage-3' />
      <img src={coll4} alt="" className='img-collage-4' />
          
      </div>


      
  
       {/* another comp: FEATURED COLLEC  */}
  
      <div className='featured-collection-container'>  

      <h1 className='title-homepage-featured-coll'>Shop our new must haves! </h1> 
           {/* another comp inside featurede collec COLLECTION */}

      <button className='btn btn-white'>Shop now</button>

      </div>




      {/* another one AbOUT US*/}

      <div className='home-about-us-container'>

        <img src={coll3} alt="" className='home-about-us-img' />

        <div className='about-us-text-cont'>
            <div className='about-us-text'>
            Fabrique François is opgericht door twee zussen.
            Onze collectie bestaat uit eigen geselecteerde stuks waar we zelf blij van worden. We willen betaalbare mode aanbieden voor dames die kiezen voor net dat tikkeltje 'extra'.
            </div>

            <button className='btn btn-green'>About us</button>

        </div>

      </div>
   </>
  )
}

export default Featuredblocks