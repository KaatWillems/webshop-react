import React from 'react'
import Allproducts from './Allproducts'
import Headerproduct from './Headerproduct'
import Product from './Product'

function Productsjackets(props) {

  //console.log(props.products)  

  let jackets = props.products.filter(product => product.type === "jackets")
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
                <h1 className='h1 h1-product'> Jackets</h1>
            </div>

         

            {/* <div> {props.products.map(productx => <Product productx={productx} /> )}</div> */}
            <div> {jackets.map(jacket => <Product productx={jacket} addToCart={props.addToCart} /> )}</div>

                  



        </div>



    </>
  )
}

export default Productsjackets