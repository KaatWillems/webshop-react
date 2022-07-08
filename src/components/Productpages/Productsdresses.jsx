import React from 'react'
import Allproducts from './Allproducts'
import Headerproduct from './Headerproduct'
import Product from './Product'

function Productsdresses(props) {

  console.log(props.products)  

  let dresses = props.products.filter(product => product.type === "dresses")
  console.log(dresses)

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
                <h1 className='h1 h1-product'> Dresses</h1>
            </div>

         

            {/* <div> {props.products.map(productx => <Product productx={productx} /> )}</div> */}
            <div className='product-container'> {dresses.map(dress => <Product productx={dress} addToCart={props.addToCart} /> )}
            </div>

                  



        </div>



    </>
  )
}

export default Productsdresses