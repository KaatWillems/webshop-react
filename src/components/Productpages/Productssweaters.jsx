import React from 'react'
import Allproducts from './Allproducts'
import Headerproduct from './Headerproduct'
import Product from './Product'

function Productssweaters(props) {

  //console.log(props.products)  

  let sweaters = props.products.filter(product => product.type === "sweaters")
  //console.log(jeans)

  // props.products.forEach((product) => {    
  //   //let dressarr = 
  //   props.products.filter(dresses => dresses.type === "dresses")
  //   arr.push(product)
 // })


  return (
    <>
        
        <Headerproduct />
        <div className='productpage-container'>
            <div className='title-container'>
                <h1 className='h1 h1-product'> Sweaters</h1>
            </div>

         

            {/* <div> {props.products.map(productx => <Product productx={productx} /> )}</div> */}
            <div className='product-container'> {sweaters.map(sweater => <Product productx={sweater} addToCart={props.addToCart} /> )}</div>

                  



        </div>



    </>
  )
}

export default Productssweaters