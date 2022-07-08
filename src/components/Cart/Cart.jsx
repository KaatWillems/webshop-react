import React from 'react'
import Headerproduct from '../Productpages/Headerproduct'
import Cartproduct from './Cartproduct'

function Cart(props) {

    console.log(props.cartitems)

    // let itemlist = props.cartitems.map(item => <div> {item.name}</div>)
  return (
   <>
       <Headerproduct />
       <h1 className='h1'>Your cart</h1>
       {/* <h1>{props.cartitems.name}</h1> */}
       <div>
       {/* {props.cartitems.map(item => <h1> {item.name}</h1> )} */}
       { !props.cartitems ? <div>You have no items in your cart. <a href="/products">Continue Shopping!</a></div> : props.cartitems.map(item => <Cartproduct item={item}/> )}

       </div>


{/* <div>{itemlist}</div> */}
   </>
  )
}

export default Cart