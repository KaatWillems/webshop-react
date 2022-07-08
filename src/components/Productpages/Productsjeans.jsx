import React from 'react'
import Allproducts from './Allproducts'
import Headerproduct from './Headerproduct'
import Product from './Product'

function Productsjeans(props) {

  //console.log(props.products)  
  //console.log(props.addToCart);

  let jeans = props.products.filter(product => product.type === "jeans")
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
                <h1 className='h1 h1-product'> Jeans</h1>
            </div>

         

            {/* <div> {props.products.map(productx => <Product productx={productx} /> )}</div> */}
            <div> {jeans.map(jeans => <Product productx={jeans} addToCart={props.addToCart}  /> )}</div>

                  



        </div>



    </>
  )
}

export default Productsjeans