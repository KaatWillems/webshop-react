import React from 'react'
import Product from '../Productpages/Product'

function FeaturedCollection(props) {

    let featured = props.products.filter(product => product.type === "sweaters")

  console.log(featured)
  return (
    <div className='featured-collection-container'>  

      <h1 className='title-homepage-featured-coll'>Shop our new must haves! </h1> 

    {/* <div className='product-container'> {featured.map(feature => <Product productx={feature} /> )}
    </div> */}
    
      <button className='btn btn-white'>Shop now</button>

      </div>

  )
}

export default FeaturedCollection