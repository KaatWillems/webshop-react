import React, {useState, useEffect} from 'react'
import './Cart.css'
import Headerproduct from '../Productpages/Headerproduct'
import Cartproduct from './Cartproduct'
import { AiOutlineShopping } from "react-icons/ai";
import { Input, Select, Button, Badge } from "antd";



function Cart(props) {

    console.log(props.cartitems)
   

    const [subTotalPrice, setsubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    // useEffect(() => {
    //   let price ;
    //   props.cartitems.forEach((item) => {
        
    //     price = item.qty * item.price;
    //     setTotalPrice(price);
    //   });
      
     
      
    // }, [props.cartitems, totalPrice, setTotalPrice]);

    console.log(totalPrice);
  return (
   <>
       <Headerproduct cartcount={props.cartcount} />
       <h1 className='h1 h1-cart'>Your Cart ({props.cartcount})</h1>
       <h4 className='h4-cart'>Buy now or cry later </h4>
       {/* <h1>{props.cartitems.name}</h1> */}
       <div className='cart-product-container'>
       {/* {props.cartitems.map(item => <h1> {item.name}</h1> )} */}
       { !props.cartitems ? <div>You have no items in your cart. <a href="/products">Continue Shopping!</a></div> :   props.cartitems.map(item => <Cartproduct item={item}/> )}

      

       </div>

       <button className='btn btn-green'>Continue to Checkout</button>


{/* <div>{itemlist}</div> */}
   </>
  )
}

export default Cart