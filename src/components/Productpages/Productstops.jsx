import React from 'react'
import Allproducts from './Allproducts'
import Headerproduct from './Headerproduct'
import Product from './Product'

function Productstops(props) {

  //console.log(props.products)  

  let tops = props.products.filter(product => product.type === "tops")
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
                <h1 className='h1 h1-product'> Tops</h1>
            </div>

         

            {/* <div> {props.products.map(productx => <Product productx={productx} /> )}</div> */}
            <div> {tops.map(top => <Product productx={top} addToCart={props.addToCart} /> )}</div>

                  



        </div>



    </>
  )
}

export default Productstops