import React from 'react'
import Headerproduct from './Headerproduct'
import Product from './Product'
// import blouse from '../../images/blouse.webp'
// import collage6 from '../../images/collage6.jpg'
import products from '../../products.json'



//console.log(products)

function Allproducts(props) {

  //console.log(products)



 
  return (
    <>
        
        <Headerproduct />
        <div className='productpage-container'>
            <div className='title-container'>
                <h1 className='h1'> All items</h1>
            </div>
           {/* <div> {products.map(productx => <Product productx={productx} /> )}</div> */}
              <div> {props.products.map(productx => <Product productx={productx} /> )}</div>

        </div>



    </>
  )
}

export default Allproducts